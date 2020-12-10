import { models } from '../../db/index.js'
import {
	filterLoop,
	getUserData,
	getPermission,
	getParticipantData,
} from '../tools'

export async function getAll(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'rScore')

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

	return await models.score.findAll({
		where: filters,
		offset: args.offset,
		limit: args.limit,
		order: orderBy,
	})
}

export async function getById(parentValue, { ...args }, context) {
	return await models.score.findAll({ where: parentValue })
}

export async function create(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'cScore')

	return await models.score.create(args)
}

export async function update(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uScore')

	const id = args.id
	delete args.id

	await models.score.update(args, { where: { id: id } })
	return await models.score.findOne({ where: { id: id } })
}

export async function remove(parentValue, { id }) {
	const userData = getUserData(context)
	await getPermission(userData, 'dScore')

	const deleted = await models.score.findOne({ where: { id: id } })
	models.score.destroy({ where: { id } })
	return deleted
}
