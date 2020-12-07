import { models } from '../../db/index.js'
import { filterLoop, getUserData, getPermission } from '../tools'

export async function getAll(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'rTestType')

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

	return await models.testType.findAll({
		where: filters,
		offset: args.offset,
		limit: args.limit,
		order: orderBy,
	})
}

export async function getById(parentValue, { ...args }, context) {
	getUserData(context)

	return await models.testType.findOne({ where: parentValue })
}

export async function create(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'cTestType')

	return await models.testType.create(args)
}

export async function update(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uTestType')

	const id = args.id
	delete args.id

	await models.testType.update(args, { where: { id: id } })
	return await models.testType.findOne({ where: { id: id } })
}

export async function remove(parentValue, { id }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'dTestType')

	const deleted = await models.testType.findOne({ where: { id: id } })
	models.testType.destroy({ where: { id } })
	return deleted
}
