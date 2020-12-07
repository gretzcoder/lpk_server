import { models } from '../../db/index.js'
import {
	filterLoop,
	getUserData,
	getPermission,
	getParticipantData,
} from '../tools'

export async function getAll(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'rStage')

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

	return await models.stage.findAll({
		where: filters,
		offset: args.offset,
		limit: args.limit,
		order: orderBy,
	})
}

export async function getById(parentValue, { ...args }) {
	return await models.stage.findOne({ where: parentValue })
}

export async function create(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'cStage')

	return await models.stage.create(args)
}

export async function update(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uStage')

	const id = args.id
	delete args.id

	await models.stage.update(args, { where: { id: id } })
	return await models.stage.findOne({ where: { id: id } })
}

export async function remove(parentValue, { id }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'dStage')

	const deleted = await models.stage.findOne({ where: { id } })
	models.stage.destroy({ where: { id } })
	return deleted
}
