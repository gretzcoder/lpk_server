import { models } from '../../db/index.js'
import {
	filterLoop,
	getPermission,
	getUserData,
	getParticipantData,
} from '../tools'

import { createWriteStream, unlink } from 'fs'
import path from 'path'
import moment from 'moment'

export async function getAll(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'rProgram')

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

	return await models.program.findAll({
		where: filters,
		offset: args.offset,
		limit: args.limit,
		order: orderBy,
	})
}

export async function getById(parentValue, { ...args }, context) {
	if (parentValue != null) {
		return await models.program.findAll({ where: parentValue })
	}

	const userData = getUserData(context)
	if (userData.roleId != 2) {
		return await models.program.findAll({
			where: { createdBy: userData.id },
		})
	}

	const participantData = await getParticipantData(userData.id)
	return await models.program.findAll({
		where: { id: participantData.programId },
	})
}

export async function create(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'cProgram')

	if (args.fotoProgram != null) {
		const { createReadStream, mimetype } = await args.fotoProgram
		const ext = mimetype.split('/')

		if (ext[0] != 'image') {
			throw new Error('must be image')
		}

		args.fotoProgram = path.join(
			__dirname,
			'../../files/fotoProgram/',
			`${moment().format('YYYYMMDDHHmmss')}-${args.namaProgram}.${ext[1]}`
		)

		var lastCreate = await models.program.create(args)

		await createReadStream().pipe(
			createWriteStream(
				path.join(
					__dirname,
					'../../files/fotoProgram/',
					`${moment().format('YYYYMMDDHHmmss')}-${args.namaProgram}.${ext[1]}`
				)
			)
		)
	} else {
		var lastCreate = await models.program.create(args)
	}

	return lastCreate
}

export async function update(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uProgram')

	const id = args.id
	delete args.id

	//image upload
	if (args.fotoProgram != null) {
		const { createReadStream, mimetype } = await args.fotoProgram
		const ext = mimetype.split('/')

		if (ext[0] != 'image') {
			throw new Error('must be image')
		}

		const { fotoProgram } = await models.program.findOne({
			where: { id: id },
			attributes: ['fotoProgram'],
		})

		args.fotoProgram = path.join(
			__dirname,
			'../../files/fotoProgram/',
			`${id}.${ext[1]}`
		)

		await models.program.update(args, { where: { id: id } })

		if (fotoProgram != null) {
			unlink(fotoProgram, () => {})
		}

		await createReadStream().pipe(
			createWriteStream(
				path.join(__dirname, '../../files/fotoProgram/', `${id}.${ext[1]}`)
			)
		)
	} else {
		await models.program.update(args, { where: { id: id } })
	}

	return await models.program.findOne({ where: { id: id } })
}

export async function remove(parentValue, { id }) {
	const userData = getUserData(context)
	await getPermission(userData, 'dProgram')

	const deleted = await models.program.findOne({ where: { id } })
	models.program.destroy({ where: { id } })
	return deleted
}
