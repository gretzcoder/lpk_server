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
	await getPermission(userData, 'rCertificate')

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

	return await models.certificate.findAll({
		where: filters,
		offset: args.offset,
		limit: args.limit,
		order: orderBy,
	})
}

export async function getById(parentValue, { ...args }, context) {
	if (parentValue != null) {
		return await models.certificate.findAll({ where: parentValue })
	}

	const userData = getUserData(context)

	if (userData.roleId != 2) {
		return await models.certificate.findAll({
			where: { verifiedBy: userData.id },
		})
	}

	const participantData = await getParticipantData(userData.id)
	return await models.certificate.findAll({ where: participantData.id })
}

export async function update(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uCertificate')

	const id = args.id
	delete args.id

	if (args.jft != null) {
		const { createReadStream, mimetype } = await args.jft
		const ext = mimetype.split('/')

		if (ext[1] != 'pdf') {
			throw new Error('must be pdf')
		}

		args.jft = path.join(
			__dirname,
			'../../files/sertifikat/jft',
			`${moment().format('YYYYMMDDHHmmss')}-${id}.${ext[1]}`
		)

		await models.certificate.update(
			{
				jft: args.jft,
			},
			{ where: { id: id } }
		)

		await createReadStream().pipe(
			createWriteStream(
				path.join(
					__dirname,
					'../../files/sertifikat/jft',
					`${moment().format('YYYYMMDDHHmmss')}-${id}.${ext[1]}`
				)
			)
		)
	}
	if (args.ssw != null) {
		const { createReadStream, mimetype } = await args.ssw
		const ext = mimetype.split('/')

		if (ext[1] != 'pdf') {
			throw new Error('must be pdf')
		}

		args.ssw = path.join(
			__dirname,
			'../../files/sertifikat/ssw',
			`${moment().format('YYYYMMDDHHmmss')}-${id}.${ext[1]}`
		)

		await models.certificate.update(
			{
				ssw: args.ssw,
			},
			{ where: { id: id } }
		)

		await createReadStream().pipe(
			createWriteStream(
				path.join(
					__dirname,
					'../../files/sertifikat/ssw',
					`${moment().format('YYYYMMDDHHmmss')}-${id}.${ext[1]}`
				)
			)
		)
	}
	if (args.ssw == null && args.jft == null) {
		await models.certificate.update(args, { where: { id: id } })
	}

	return await models.certificate.findOne({ where: { id: id } })
}

export async function selfUpdate(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	const participantData = await getParticipantData(userData.id)

	if (args.jft != null) {
		const { createReadStream, mimetype } = await args.jft
		const ext = mimetype.split('/')

		if (ext[1] != 'pdf') {
			throw new Error('must be pdf')
		}

		args.jft = path.join(
			__dirname,
			'../../files/sertifikat/jft',
			`${moment().format('YYYYMMDDHHmmss')}-${participantData.id}.${ext[1]}`
		)

		await models.certificate.update(
			{
				jft: args.jft,
			},
			{ where: { id: participantData.id } }
		)

		await createReadStream().pipe(
			createWriteStream(
				path.join(
					__dirname,
					'../../files/sertifikat/jft',
					`${moment().format('YYYYMMDDHHmmss')}-${participantData.id}.${ext[1]}`
				)
			)
		)
	}
	if (args.ssw != null) {
		const { createReadStream, mimetype } = await args.ssw
		const ext = mimetype.split('/')

		if (ext[1] != 'pdf') {
			throw new Error('must be pdf')
		}

		args.ssw = path.join(
			__dirname,
			'../../files/sertifikat/ssw',
			`${moment().format('YYYYMMDDHHmmss')}-${participantData.id}.${ext[1]}`
		)

		await models.certificate.update(
			{
				ssw: args.ssw,
			},
			{ where: { id: participantData.id } }
		)

		await createReadStream().pipe(
			createWriteStream(
				path.join(
					__dirname,
					'../../files/sertifikat/ssw',
					`${moment().format('YYYYMMDDHHmmss')}-${participantData.id}.${ext[1]}`
				)
			)
		)
	}

	return await models.certificate.findOne({ where: { id: participantData.id } })
}

export async function remove(parentValue, { id }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'dCertificate')

	const deleted = await models.certificate.findOne({ where: { id } })
	models.certificate.destroy({ where: { id } })
	return deleted
}
