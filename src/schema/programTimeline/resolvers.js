import { models } from '../../db/index.js'
import {
	filterLoop,
	getPermission,
	getUserData,
	getParticipantData,
} from '../tools'

export async function getAll(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'rProgramTimeline')

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

	return await models.programTimeline.findAll({
		where: filters,
		offset: args.offset,
		limit: args.limit,
		order: orderBy,
	})
}

export async function getById(parentValue, { ...args }) {
	return await models.programTimeline.findAll({
		where: parentValue,
	})
}

export async function create(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'cProgramTimeline')

	return await models.programTimeline.create(args)
}

export async function update(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uProgramTimeline')

	const id = args.id
	delete args.id

	await models.programTimeline.update(args, { where: { id: id } })
	return await models.programTimeline.findOne({ where: { id: id } })
}

export async function remove(parentValue, { id }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'dProgramTimeline')

	const deleted = await models.programTimeline.findOne({ where: { id } })
	models.programTimeline.destroy({ where: { id } })
	return deleted
}
