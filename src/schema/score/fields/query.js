import {
	GraphQLID,
	GraphQLList,
	GraphQLInt,
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLNonNull,
} from 'graphql'

import ScoreType from '../type.js'
import { getAll, getById } from '../resolvers.js'
import { orderByType } from '../../tools'

export const scores = {
	type: new GraphQLList(ScoreType),
	args: {
		limit: { type: GraphQLInt },
		offset: { type: GraphQLInt },
		filters: {
			type: new GraphQLInputObjectType({
				name: 'filtersScores',
				fields: {
					id: { type: GraphQLID },
					nilai: { type: GraphQLInt },
					testTypeId: { type: GraphQLID },
					trainingClassId: { type: GraphQLID },
					updatedAt: { type: GraphQLString },
					createdAt: { type: GraphQLString },
				},
			}),
		},
		orderBy: {
			type: new GraphQLInputObjectType({
				name: 'orderByScores',
				fields: {
					id: { type: orderByType },
					nilai: { type: orderByType },
					testTypeId: { type: orderByType },
					trainingClassId: { type: orderByType },
					updatedAt: { type: orderByType },
					createdAt: { type: orderByType },
				},
			}),
		},
	},
	resolve: getAll,
}

export const score = {
	type: new GraphQLList(ScoreType),

	resolve: getById,
}
