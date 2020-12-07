import {
	GraphQLID,
	GraphQLList,
	GraphQLInt,
	GraphQLString,
	GraphQLInputObjectType,
} from 'graphql'

import CertificateType from '../type'
import { getAll, getById } from '../resolvers'
import { orderByType } from '../../tools'

export const certificates = {
	type: new GraphQLList(CertificateType),
	args: {
		limit: { type: GraphQLInt },
		offset: { type: GraphQLInt },
		filters: {
			type: new GraphQLInputObjectType({
				name: 'filtersCertificate',
				fields: {
					id: { type: GraphQLID },
					participantId: { type: GraphQLID },
					verifiedBy: { type: GraphQLID },
					jft: { type: GraphQLString },
					ssw: { type: GraphQLString },
					updatedAt: { type: GraphQLString },
					createdAt: { type: GraphQLString },
				},
			}),
		},
		orderBy: {
			type: new GraphQLInputObjectType({
				name: 'orderByCertificate',
				fields: {
					id: { type: orderByType },
					participantId: { type: orderByType },
					verifiedBy: { type: orderByType },
					jft: { type: orderByType },
					ssw: { type: orderByType },
					updatedAt: { type: orderByType },
					createdAt: { type: orderByType },
				},
			}),
		},
	},
	resolve: getAll,
}

export const certificate = {
	type: new GraphQLList(CertificateType),

	resolve: getById,
}
