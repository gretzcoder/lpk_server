import {
	GraphQLID,
	GraphQLList,
	GraphQLInt,
	GraphQLString,
	GraphQLInputObjectType,
} from 'graphql'

import FileType from '../type'
import { getAll, getById } from '../resolvers'
import { orderByType } from '../../tools'

export const files = {
	type: new GraphQLList(FileType),
	args: {
		limit: { type: GraphQLInt },
		offset: { type: GraphQLInt },
		filters: {
			type: new GraphQLInputObjectType({
				name: 'filtersFiles',
				fields: {
					id: { type: GraphQLID },
					selectionBy: { type: GraphQLID },
					cv: { type: GraphQLString },
					ktp: { type: GraphQLString },
					pasPhoto: { type: GraphQLString },
					ijazah: { type: GraphQLString },
					transkripNilai: { type: GraphQLString },
					sertifikat: { type: GraphQLString },
					skck: { type: GraphQLString },
					suratKesehatan: { type: GraphQLString },
					suratPersetujuanOrangtua: { type: GraphQLString },
					updatedAt: { type: GraphQLString },
					createdAt: { type: GraphQLString },
				},
			}),
		},
		orderBy: {
			type: new GraphQLInputObjectType({
				name: 'orderByFiles',
				fields: {
					id: { type: orderByType },
					selectionBy: { type: orderByType },
					cv: { type: orderByType },
					ktp: { type: orderByType },
					pasPhoto: { type: orderByType },
					ijazah: { type: orderByType },
					transkripNilai: { type: orderByType },
					sertifikat: { type: orderByType },
					skck: { type: orderByType },
					suratKesehatan: { type: orderByType },
					suratPersetujuanOrangtua: { type: orderByType },
					updatedAt: { type: orderByType },
					createdAt: { type: orderByType },
				},
			}),
		},
	},
	resolve: getAll,
}

export const file = {
	type: new GraphQLList(FileType),
	resolve: getById,
}
