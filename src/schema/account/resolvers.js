import { models } from '../../db'
import { filterLoop, getUserData, getPermission } from '../tools'

import path from 'path'

export async function getAll(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'rAccount')

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

	return await models.account.findAll({
		where: filters,
		offset: args.offset,
		limit: args.limit,
		order: orderBy,
	})
}

export async function getById(parentValue, { ...args }, context) {
	if (parentValue != null) {
		return await models.account.findAll({ where: parentValue })
	}

	return getUserData(context)
}

export async function create(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'cAccount')

	const lastRecord = await models.account.create(args)

	await models.profile.create({
		accountId: lastRecord.id,
		foto: path.join(__dirname, '../../files/fotoProfile/default.png'),
	})

	return lastRecord
}

export async function update(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uAccount')

	const id = args.id
	delete args.id

	await models.account.update(args, { where: { id: id } })

	return await models.account.findOne({ where: { id: id } })
}

export async function selfUpdate(parentValue, { ...args }, context) {
	const userData = getUserData(context)

	await models.account.update(args, { where: { id: userData.id } })

	return await models.account.findOne({ where: { id: userData.id } })
}

export async function remove(parentValue, { id }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'dAccount')

	const deleted = await models.account.findOne({ where: { id: id } })
	models.account.destroy({ where: { id } })
	return deleted
}
