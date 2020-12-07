import {
	GraphQLID,
	GraphQLList,
	GraphQLInt,
	GraphQLInputObjectType,
	GraphQLString,
} from 'graphql'

import ProgramType from '../type.js'
import { getAll, getById } from '../resolvers.js'
import { orderByType } from '../../tools'

export const programs = {
	type: new GraphQLList(ProgramType),
	args: {
		limit: { type: GraphQLInt },
		offset: { type: GraphQLInt },
		filters: {
			type: new GraphQLInputObjectType({
				name: 'filtersPrograms',
				fields: {
					id: { type: GraphQLID },
					namaProgram: { type: GraphQLString },
					deskripsiProgram: { type: GraphQLString },
					biayaProgram: { type: GraphQLInt },
					createdBy: { type: GraphQLString },
					lastUpdatedBy: { type: GraphQLString },
					updatedAt: { type: GraphQLString },
					createdAt: { type: GraphQLString },
				},
			}),
		},
		orderBy: {
			type: new GraphQLInputObjectType({
				name: 'orderByPrograms',
				fields: {
					id: { type: orderByType },
					namaProgram: { type: orderByType },
					deskripsiProgram: { type: orderByType },
					biayaProgram: { type: orderByType },
					createdBy: { type: orderByType },
					lastUpdatedBy: { type: orderByType },
					updatedAt: { type: orderByType },
					createdAt: { type: orderByType },
				},
			}),
		},
	},
	resolve: getAll,
}

export const program = {
	type: new GraphQLList(ProgramType),
	resolve: getById,
}
