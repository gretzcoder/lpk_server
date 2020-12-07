import {
	GraphQLID,
	GraphQLList,
	GraphQLInt,
	GraphQLString,
	GraphQLInputObjectType,
} from 'graphql'

import ProfileType from '../type'
import { getAll, getById } from '../resolvers'
import { orderByType } from '../../tools'

export const profiles = {
	type: new GraphQLList(ProfileType),
	args: {
		limit: { type: GraphQLInt },
		offset: { type: GraphQLInt },
		filters: {
			type: new GraphQLInputObjectType({
				name: 'filtersProfiles',
				fields: {
					id: { type: GraphQLID },
					namaLengkap: { type: GraphQLString },
					alamat: { type: GraphQLString },
					noTelepon: { type: GraphQLString },
					jenisKelamin: { type: GraphQLString },
					tanggalLahir: { type: GraphQLString },
					pendidikan: { type: GraphQLString },
					jurusan: { type: GraphQLString },
					foto: { type: GraphQLString },
					updatedAt: { type: GraphQLString },
					createdAt: { type: GraphQLString },
				},
			}),
		},
		orderBy: {
			type: new GraphQLInputObjectType({
				name: 'orderByProfiles',
				fields: {
					id: { type: orderByType },
					namaLengkap: { type: orderByType },
					alamat: { type: orderByType },
					noTelepon: { type: orderByType },
					jenisKelamin: { type: orderByType },
					tanggalLahir: { type: orderByType },
					pendidikan: { type: orderByType },
					jurusan: { type: orderByType },
					foto: { type: orderByType },
					updatedAt: { type: orderByType },
					createdAt: { type: orderByType },
				},
			}),
		},
	},
	resolve: getAll,
}

export const selfProfile = {
	type: ProfileType,
	resolve: getById,
}
