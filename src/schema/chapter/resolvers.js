import { models } from '../../db/index.js'
import { filterLoop, getUserData, getPermission } from '../tools'

export async function getAll(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'rChapter')

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

	return await models.chapter.findAll({
		where: filters,
		offset: args.offset,
		limit: args.limit,
		order: orderBy,
	})
}

export async function getById(parentValue, { ...args }, context) {
	const userData = getUserData(context)

	return await models.chapter.findOne({ where: parentValue || args })
}

export async function create(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'cChapter')

	return await models.chapter.create(args)
}

export async function update(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uChapter')

	const id = args.id
	delete args.id

	await models.chapter.update(args, { where: { id: id } })
	return await models.chapter.findOne({ where: { id: id } })
}

export async function remove(parentValue, { id }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'dChapter')

	const deleted = await models.chapter.findOne({ where: { id: id } })
	models.chapter.destroy({ where: { id } })
	return deleted
}
