import { models } from '../../db/index.js'
import {
	filterLoop,
	getUserData,
	getPermission,
	getParticipantData,
} from '../tools'

import path from 'path'
import { createWriteStream, unlink } from 'fs'
import moment from 'moment'

export async function getAll(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'rFile')

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

	return await models.file.findAll({
		where: filters,
		offset: args.offset,
		limit: args.limit,
		order: orderBy,
	})
}

export async function getById(parentValue, { ...args }, context) {
	if (parentValue != null) {
		return await models.file.findAll({ where: parentValue })
	}

	const userData = getUserData(context)

	if (userData.roleId != 2) {
		return await models.file.findAll({
			where: { selectionBy: userData.id },
		})
	}

	const participantData = await getParticipantData(userData.id)
	return await models.file.findAll({ where: participantData.id })
}

export async function create(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'cFile')
	const participantData = await getParticipantData(userData.id)

	let data = { participantId: participantData.id }

	//store to db
	for (const [key, value] of Object.entries(args)) {
		const { mimetype } = await value
		const ext = mimetype.split('/')

		if (ext[0] != 'image') {
			throw new Error('must be image')
		}

		data[key] = path.join(
			__dirname,
			'../../files/berkas/',
			`${key}-${moment().format('YYYYMMDDHHmmss')}-${data.participantId}.${
				ext[1]
			}`
		)
	}
	const create = await models.file.create(data)

	//save file to server
	for (const [key, value] of Object.entries(args)) {
		const { createReadStream, mimetype } = await value
		const ext = mimetype.split('/')

		await createReadStream().pipe(
			createWriteStream(
				path.join(
					__dirname,
					'../../files/berkas/',
					`${key}-${moment().format('YYYYMMDDHHmmss')}-${data.participantId}.${
						ext[1]
					}`
				)
			)
		)
	}

	return create
}

export async function update(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uFile')

	let data = { selectionBy: args.selectionBy }
	const id = args.id
	delete args.id
	delete args.selectionBy
	let get = await models.file.findOne({ where: { id: id } })

	//upload to db
	for (const [key, value] of Object.entries(args)) {
		const { mimetype } = await value
		const ext = mimetype.split('/')

		if (ext[0] != 'image') {
			throw new Error('must be image')
		}

		data[key] = path.join(
			__dirname,
			'../../files/berkas/',
			`${key}-${moment().format('YYYYMMDDHHmmss')}-${get['participantId']}.${
				ext[1]
			}`
		)
	}
	await models.file.update(data, { where: { id: id } })

	//update file in server
	for (const [key, value] of Object.entries(args)) {
		const { createReadStream, mimetype } = await value
		const ext = mimetype.split('/')

		if (get[key] != null) {
			unlink(get[key], () => {})
		}

		await createReadStream().pipe(
			createWriteStream(
				path.join(
					__dirname,
					'../../files/berkas/',
					`${key}-${moment().format('YYYYMMDDHHmmss')}-${
						get['participantId']
					}.${ext[1]}`
				)
			)
		)
	}

	return await models.file.findOne({ where: { id: id } })
}

export async function selfUpdate(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	const participantData = await getParticipantData(userData.id)
	const file = await models.file.findOne({
		where: { participantId: participantData.id },
	})

	let data = {}

	//upload to db
	for (const [key, value] of Object.entries(args)) {
		const { mimetype } = await value
		const ext = mimetype.split('/')

		if (ext[0] != 'image') {
			throw new Error('must be image')
		}

		data[key] = path.join(
			__dirname,
			'../../files/berkas/',
			`${key}-${moment().format('YYYYMMDDHHmmss')}-${participantData.id}.${
				ext[1]
			}`
		)
	}
	await models.file.update(data, { where: { id: file.id } })

	//update file in server
	for (const [key, value] of Object.entries(args)) {
		const { createReadStream, mimetype } = await value
		const ext = mimetype.split('/')

		if (file[key] != null) {
			unlink(file[key], () => {})
		}

		await createReadStream().pipe(
			createWriteStream(
				path.join(
					__dirname,
					'../../files/berkas/',
					`${key}-${moment().format('YYYYMMDDHHmmss')}-${participantData.id}.${
						ext[1]
					}`
				)
			)
		)
	}

	return await models.file.findOne({ where: { id: file.id } })
}

export async function remove(parentValue, { id }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'dFile')

	const deleted = await models.file.findOne({ where: { id } })
	models.file.destroy({ where: { id } })
	return deleted
}
