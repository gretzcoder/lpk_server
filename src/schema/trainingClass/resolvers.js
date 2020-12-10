import { models } from '../../db/index.js'
import {
	filterLoop,
	getUserData,
	getPermission,
	getParticipantData,
} from '../tools'

export async function getAll(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'rTrainingClass')

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

	return await models.trainingClass.findAll({
		where: filters,
		offset: args.offset,
		limit: args.limit,
		order: orderBy,
	})
}

export async function getById(parentValue, { ...args }, context) {
	if (parentValue != null) {
		return await models.trainingClass.findAll({ where: parentValue })
	}

	const userData = getUserData(context)

	if (userData.roleId == 2) {
		const participantData = await getParticipantData(userData.id)
		return await models.trainingClass.findAll({
			where: { participantId: participantData.id },
		})
	}
	return await models.trainingClass.findAll({
		where: { trainerId: userData.id },
	})
}

export async function create(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'cTrainingClass')

	return await models.trainingClass.create(args)
}

export async function update(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uTrainingClass')

	const id = args.id
	delete args.id

	await models.trainingClass.update(args, { where: { id: id } })
	return await models.trainingClass.findOne({ where: { id: id } })
}

export async function remove(parentValue, { id }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'dTrainingClass')

	const deleted = await models.trainingClass.findOne({ where: { id: id } })
	models.trainingClass.destroy({ where: { id } })
	return deleted
}
