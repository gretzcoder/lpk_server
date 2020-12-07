import {
	GraphQLID,
	GraphQLList,
	GraphQLInt,
	GraphQLInputObjectType,
	GraphQLString,
} from 'graphql'

import participantType from '../type.js'
import { getAll, getById } from '../resolvers.js'
import { orderByType } from '../../tools'

export const participants = {
	type: new GraphQLList(participantType),
	args: {
		limit: { type: GraphQLInt },
		offset: { type: GraphQLInt },
		filters: {
			type: new GraphQLInputObjectType({
				name: 'filtersParticipants',
				fields: {
					id: { type: GraphQLID },
					tagihan: { type: GraphQLInt },
					programId: { type: GraphQLID },
					accountId: { type: GraphQLID },
					stageId: { type: GraphQLID },
					updatedAt: { type: GraphQLString },
					createdAt: { type: GraphQLString },
				},
			}),
		},
		orderBy: {
			type: new GraphQLInputObjectType({
				name: 'orderByParticipants',
				fields: {
					id: { type: orderByType },
					tagihan: { type: orderByType },
					programId: { type: orderByType },
					accountId: { type: orderByType },
					stageId: { type: orderByType },
					updatedAt: { type: orderByType },
					createdAt: { type: orderByType },
				},
			}),
		},
	},
	resolve: getAll,
}

export const selfParticipant = {
	type: new GraphQLList(participantType),
	resolve: getById,
}
