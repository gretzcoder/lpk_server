import {
	GraphQLID,
	GraphQLList,
	GraphQLInt,
	GraphQLString,
	GraphQLInputObjectType,
} from 'graphql'

import PaymentType from '../type'
import { getAll, getById } from '../resolvers'
import { orderByType } from '../../tools'

export const payments = {
	type: new GraphQLList(PaymentType),
	args: {
		limit: { type: GraphQLInt },
		offset: { type: GraphQLInt },
		filters: {
			type: new GraphQLInputObjectType({
				name: 'filtersPayment',
				fields: {
					id: { type: GraphQLID },
					participantId: { type: GraphQLID },
					verifiedBy: { type: GraphQLID },
					nominal: { type: GraphQLInt },
					buktiTransfer: { type: GraphQLString },
					updatedAt: { type: GraphQLString },
					createdAt: { type: GraphQLString },
				},
			}),
		},
		orderBy: {
			type: new GraphQLInputObjectType({
				name: 'orderByPayment',
				fields: {
					id: { type: orderByType },
					participantId: { type: orderByType },
					verifiedBy: { type: orderByType },
					nominal: { type: orderByType },
					buktiTransfer: { type: orderByType },
					updatedAt: { type: orderByType },
					createdAt: { type: orderByType },
				},
			}),
		},
	},
	resolve: getAll,
}

export const payment = {
	type: GraphQLList(PaymentType),
	resolve: getById,
}
