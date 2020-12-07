import { models } from '../../db/index.js'
import {
	filterLoop,
	getUserData,
	getPermission,
	getParticipantData,
} from '../tools'

import { createWriteStream } from 'fs'
import path from 'path'
import moment from 'moment'

export async function getAll(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'rPayment')

	let filters = {}
	let orderBy = []

	if (args.filters != null) {
		filters = filterLoop(args.filters)
	}
	if (parentValue != null) {
		Object.assign(filters, parentValue)
	}
	if (args.orderBy != null) {
		orderBy = Object.entries(args.orderBy)
	}

	return await models.payment.findAll({
		where: filters,
		offset: args.offset,
		limit: args.limit,
		order: orderBy,
	})
}

export async function getById(parentValue, { ...args }, context) {
	if (parentValue != null) {
		return await models.payment.findAll({ where: parentValue })
	}

	const userData = getUserData(context)

	if (userData.roleId != 2) {
		return await models.payment.findAll({
			where: { verifiedBy: userData.id },
		})
	}

	const participantData = await getParticipantData(userData.id)
	return await models.payment.findAll({ where: participantData.id })
}

export async function create(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'cPayment')
	const participantData = await getParticipantData(userData.id)

	if (args.buktiTransfer != null) {
		const { createReadStream, mimetype } = await args.buktiTransfer
		const ext = mimetype.split('/')
		if (ext[0] != 'image') {
			throw new Error('must be image')
		}
		args.buktiTransfer = path.join(
			__dirname,
			'../../files/buktiTransfer/',
			`${moment().format('YYYYMMDDHHmmss')}-Participant-${participantData.id}.${
				ext[1]
			}`
		)
		var lastCreate = await models.payment.create(args)

		await createReadStream().pipe(
			createWriteStream(
				path.join(
					__dirname,
					'../../files/buktiTransfer/',
					`${moment().format('YYYYMMDDHHmmss')}-Participant-${
						participantData.id
					}.${ext[1]}`
				)
			)
		)
	} else {
		var lastCreate = await models.payment.create(args)
	}

	return lastCreate
}

export async function update(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uPayment')

	const id = args.id
	delete args.id

	//image upload
	if (args.buktiTransfer != null) {
		const { createReadStream, mimetype } = await args.buktiTransfer
		const ext = mimetype.split('/')

		if (ext[0] != 'image') {
			throw new Error('must be image')
		}

		const { participantId } = await models.payment.findOne({
			where: { id: id },
			attributes: ['participantId'],
		})

		args.buktiTransfer = path.join(
			__dirname,
			'../../files/buktiTransfer/',
			`${moment().format('YYYYMMDDHHmmss')}-Participant-${participantId}.${
				ext[1]
			}`
		)

		await models.payment.update(args, { where: { id: id } })

		await createReadStream().pipe(
			createWriteStream(
				path.join(
					__dirname,
					'../../files/buktiTransfer/',
					`${moment().format('YYYYMMDDHHmmss')}-Participant-${participantId}.${
						ext[1]
					}`
				)
			)
		)
	} else {
		await models.payment.update(args, { where: { id: id } })
	}

	return await models.payment.findOne({ where: { id: id } })
}

export async function selfUpdate(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	const participantData = await getParticipantData(userData.id)

	const payment = await models.payment.findOne({
		where: { participantId: participantData.id },
		attributes: ['id'],
	})

	//image upload
	if (args.buktiTransfer != null) {
		const { createReadStream, mimetype } = await args.buktiTransfer
		const ext = mimetype.split('/')

		if (ext[0] != 'image') {
			throw new Error('must be image')
		}

		args.buktiTransfer = path.join(
			__dirname,
			'../../files/buktiTransfer/',
			`${moment().format('YYYYMMDDHHmmss')}-Participant-${participantData.id}.${
				ext[1]
			}`
		)

		await models.payment.update(args, { where: { id: payment.id } })

		await createReadStream().pipe(
			createWriteStream(
				path.join(
					__dirname,
					'../../files/buktiTransfer/',
					`${moment().format('YYYYMMDDHHmmss')}-Participant-${
						participantData.id
					}.${ext[1]}`
				)
			)
		)
	} else {
		await models.payment.update(args, { where: { id: payment.id } })
	}

	return await models.payment.findOne({ where: { id: payment.id } })
}

export async function remove(parentValue, { id }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'dPayment')

	const deleted = await models.payment.findOne({ where: { id } })
	models.payment.destroy({ where: { id } })
	return deleted
}
