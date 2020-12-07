import { models } from '../../db/index.js'
import {
	filterLoop,
	getPermission,
	getUserData,
	getParticipantData,
} from '../tools'

export async function getAll(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'rParticipant')

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

	return await models.participant.findAll({
		where: filters,
		offset: args.offset,
		limit: args.limit,
		order: orderBy,
	})
}

export async function getById(parentValue, { ...args }, context) {
	if (parentValue != null) {
		return await models.participant.findAll({ where: parentValue })
	}

	const userData = getUserData(context)

	return await getParticipantData(userData.id)
}

export async function register(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	const participantData = await getParticipantData(userData.id)

	if (participantData != null || participantData.stageId != 10) {
		throw new Error('Kamu sudah terdaftar dalam satu program')
	}
	const program = await models.program.findOne({
		where: { id: args.programId },
	})

	if (program == null) {
		throw new Error('Program Salah!')
	}

	args.accountId = userData.id
	args.tagihan = program.biayaProgram
	args.stageId = 1

	const lastRecord = await models.participant.create(args)

	await models.certificate.create({
		participantId: lastRecord.id,
	})

	return lastRecord
}

export async function update(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uParticipant')

	const id = args.id
	delete args.id

	await models.participant.update(args, { where: { id: id } })
	return await models.participant.findOne({ where: { id: id } })
}

export async function remove(parentValue, { id }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'dParticipant')

	const deleted = await models.participant.findOne({ where: { id } })
	models.participant.destroy({ where: { id } })
	return deleted
}
