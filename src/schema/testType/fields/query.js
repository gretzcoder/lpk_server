import {
	GraphQLID,
	GraphQLList,
	GraphQLInt,
	GraphQLInputObjectType,
	GraphQLString,
} from 'graphql'

import TestTypeType from '../type.js'
import { getAll, getById } from '../resolvers.js'
import { orderByType } from '../../tools'

export const testTypes = {
	type: new GraphQLList(TestTypeType),
	args: {
		limit: { type: GraphQLInt },
		offset: { type: GraphQLInt },
		filters: {
			type: new GraphQLInputObjectType({
				name: 'filtersTestTypes',
				fields: {
					id: { type: GraphQLID },
					jenisTest: { type: GraphQLString },
					updatedAt: { type: GraphQLString },
					createdAt: { type: GraphQLString },
				},
			}),
		},
		orderBy: {
			type: new GraphQLInputObjectType({
				name: 'orderByTestTypes',
				fields: {
					id: { type: orderByType },
					jenisTest: { type: orderByType },
					updatedAt: { type: orderByType },
					createdAt: { type: orderByType },
				},
			}),
		},
	},
	resolve: getAll,
}

// export const testType = {
// 	type: TestTypeType,

// 	resolve: getById,
// }
