import { models } from '../../db/index.js'
import { filterLoop, getUserData, getPermission } from '../tools'

export async function getAll(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'rRole')

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

	return await models.role.findAll({
		where: filters,
		offset: args.offset,
		limit: args.limit,
		order: orderBy,
	})
}

export async function permission(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uRole')

	const role = await models.role.findOne({ where: { id: args.roleId } })
	const permission = await models.permission.findOne({
		where: { id: args.permissionId },
	})

	await role.addPermissions(permission, { through: { selfGranted: false } })

	return role
}

export async function rPermission(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uRole')

	const role = await models.role.findOne({ where: { id: args.roleId } })
	const permission = await models.permission.findOne({
		where: { id: args.permissionId },
	})

	await role.removePermissions(permission, { through: { selfGranted: false } })

	return role
}

export async function getById(parentValue, { ...args }, context) {
	const userData = getUserData(context)

	if (parentValue != null) {
		return await models.role.findOne({ where: parentValue })
	}

	return await models.role.findOne({ where: { id: userData.roleId } })
}

export async function create(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'cRole')

	return await models.role.create(args)
}

export async function update(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uRole')

	const id = args.id
	delete args.id

	await models.role.update(args, { where: { id: id } })
	return await models.role.findOne({ where: { id: id } })
}

export async function remove(parentValue, { id }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'dRole')

	const deleted = await models.role.findOne({ where: { id: id } })
	models.role.destroy({ where: { id } })
	return deleted
}
