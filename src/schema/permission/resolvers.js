import { models } from '../../db/index.js'
import { filterLoop, getUserData, getPermission } from '../tools'

export async function getAll(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'rPermission')

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

	return await models.permission.findAll({
		where: filters,
		offset: args.offset,
		limit: args.limit,
		order: orderBy,
	})
}

export async function getById(parentValue, { ...args }, context) {
	const userData = getUserData(context)

	if (parentValue != null) {
		const permission = await models.role.findOne({
			where: parentValue,
			attributes: [],
			include: [
				{
					model: models.permission,
				},
			],
		})

		return permission.permissions
	}

	const permission = await models.role.findOne({
		where: { id: userData.roleId },
		attributes: [],
		include: [
			{
				model: models.permission,
			},
		],
	})

	return permission.permissions
}

export async function create(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'cPermission')

	return await models.permission.create(args)
}

export async function update(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uPermission')

	const id = args.id
	delete args.id

	await models.permission.update(args, { where: { id: id } })
	return await models.permission.findOne({ where: { id: id } })
}

export async function remove(parentValue, { id }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'dPermission')

	const deleted = await models.permission.findOne({ where: { id: id } })
	models.permission.destroy({ where: { id } })
	return deleted
}
