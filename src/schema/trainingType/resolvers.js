import { models } from '../../db/index.js'
import { filterLoop, getUserData, getPermission } from '../tools'

export async function getAll(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'rTrainingType')

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

	return await models.trainingType.findAll({
		where: filters,
		offset: args.offset,
		limit: args.limit,
		order: orderBy,
	})
}

export async function getById(parentValue, { ...args }, context) {
	getUserData(context)

	return await models.trainingType.findOne({ where: parentValue })
}

export async function create(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'cTrainingType')

	return await models.trainingType.create(args)
}

export async function update(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uTrainingType')

	const id = args.id
	delete args.id

	await models.trainingType.update(args, { where: { id: id } })
	return await models.trainingType.findOne({ where: { id: id } })
}

export async function remove(parentValue, { id }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'dTrainingType')

	const deleted = await models.trainingType.findOne({ where: { id: id } })
	models.trainingType.destroy({ where: { id } })
	return deleted
}
