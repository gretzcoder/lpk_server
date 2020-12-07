import {
	GraphQLID,
	GraphQLList,
	GraphQLInt,
	GraphQLInputObjectType,
	GraphQLString,
} from 'graphql'

import permissionType from '../type.js'
import { getAll, getById } from '../resolvers.js'
import { orderByType } from '../../tools'

export const permissions = {
	type: new GraphQLList(permissionType),
	args: {
		limit: { type: GraphQLInt },
		offset: { type: GraphQLInt },
		filters: {
			type: new GraphQLInputObjectType({
				name: 'filtersPermissions',
				fields: {
					id: { type: GraphQLID },
					permission: { type: GraphQLString },
					updatedAt: { type: GraphQLString },
					createdAt: { type: GraphQLString },
				},
			}),
		},
		orderBy: {
			type: new GraphQLInputObjectType({
				name: 'orderByPermissions',
				fields: {
					id: { type: orderByType },
					permission: { type: orderByType },
					updatedAt: { type: orderByType },
					createdAt: { type: orderByType },
				},
			}),
		},
	},
	resolve: getAll,
}

export const selfPermission = {
	type: GraphQLList(permissionType),
	resolve: getById,
}
