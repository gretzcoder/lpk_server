import {
	GraphQLID,
	GraphQLInt,
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} from 'graphql'

import AccountType from '../type'
import { getById, getAll } from '../resolvers'
import { orderByType } from '../../tools'

export const accounts = {
	type: new GraphQLList(AccountType),
	args: {
		limit: { type: GraphQLInt },
		offset: { type: GraphQLInt },
		filters: {
			type: new GraphQLInputObjectType({
				name: 'filtersAccounts',
				fields: {
					id: { type: GraphQLID },
					email: { type: GraphQLString },
					updatedAt: { type: GraphQLString },
					createdAt: { type: GraphQLString },
				},
			}),
		},
		orderBy: {
			type: new GraphQLInputObjectType({
				name: 'orderByAccounts',
				fields: {
					id: { type: orderByType },
					email: { type: orderByType },
					updatedAt: { type: orderByType },
					createdAt: { type: orderByType },
				},
			}),
		},
	},
	resolve: getAll,
}

export const selfAccount = {
	type: AccountType,

	resolve: getById,
}
