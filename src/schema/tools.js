const { Op } = require('sequelize')
import { GraphQLEnumType } from 'graphql'
import jwt from 'jsonwebtoken'
import { models } from '../db'

export async function getPermission(userData, permission) {
	const query = await models.role.findOne({
		where: { id: userData.roleId },
		attributes: [],
		include: [
			{
				model: models.permission,
				attributes: ['permission'],
				where: { permission: permission },
			},
		],
	})

	if (query == null) {
		throw new Error('Forbidden')
	} else {
		return true
	}
}

export function getUserData(context) {
	if (context.headers.authorization == null) {
		throw new Error('Unauthorized')
	}

	return jwt.verify(
		context.headers.authorization,
		'Sup3rDup3rR4h4514',
		(err, decoded) => {
			if (err) {
				throw new Error('Token Salah')
			}
			return decoded.account
		}
	)
}

export async function getParticipantData(userData) {
	const participant = await models.participant.findOne({
		where: { accountId: userData },
	})

	if (participant == null) {
		throw new Error('kamu bukan peserta')
	} else {
		return participant
	}
}

// export async function getParticipantClass(userData) {
// 	const participant = await models.participant.findOne({
// 		where: { accountId: userData },
// 	})

// 	if (participant == null) {
// 		throw new Error('kamu bukan peserta')
// 	} else {
// 		return participant
// 	}
// }

export function filterLoop(obj) {
	const filters = {}
	for (const [key, value] of Object.entries(obj)) {
		filters[key] = {
			[Op.like]: `%${value}%`,
		}
	}

	return filters
}

export const orderByType = new GraphQLEnumType({
	name: 'orderByType',
	values: {
		asc: { value: 'ASC' },
		desc: { value: 'DESC' },
	},
})
