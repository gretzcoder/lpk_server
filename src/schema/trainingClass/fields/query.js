import {
	GraphQLID,
	GraphQLList,
	GraphQLInt,
	GraphQLInputObjectType,
	GraphQLString,
} from 'graphql'

import TrainingClassType from '../type.js'
import { getAll, getById } from '../resolvers.js'
import { orderByType } from '../../tools'

export const trainingClasses = {
	type: new GraphQLList(TrainingClassType),
	args: {
		limit: { type: GraphQLInt },
		offset: { type: GraphQLInt },
		filters: {
			type: new GraphQLInputObjectType({
				name: 'filtersTrainingClasses',
				fields: {
					id: { type: GraphQLID },
					trainingTypeId: { type: GraphQLID },
					scoreId: { type: GraphQLID },
					updatedAt: { type: GraphQLString },
					createdAt: { type: GraphQLString },
				},
			}),
		},
		orderBy: {
			type: new GraphQLInputObjectType({
				name: 'orderByTrainingClasses',
				fields: {
					id: { type: orderByType },
					trainingTypeId: { type: orderByType },
					scoreId: { type: orderByType },
					updatedAt: { type: orderByType },
					createdAt: { type: orderByType },
				},
			}),
		},
	},
	resolve: getAll,
}

export const trainingClass = {
	type: new GraphQLList(TrainingClassType),
	resolve: getById,
}
