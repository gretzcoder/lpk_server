import { GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql'
import { GraphQLUpload } from 'graphql-upload'

import ProfileType from '../type'
import { remove, update, selfUpdate } from '../resolvers'

export const profileAdminUpdate = {
	type: ProfileType,
	args: {
		id: {
			name: 'id',
			type: GraphQLNonNull(GraphQLID),
		},
		namaLengkap: {
			name: 'namaLengkap',
			type: GraphQLString,
		},
		alamat: {
			name: 'alamat',
			type: GraphQLString,
		},
		noTelepon: {
			name: 'noTelepon',
			type: GraphQLString,
		},
		jenisKelamin: {
			name: 'jenisKelamin',
			type: GraphQLString,
		},
		tanggalLahir: {
			name: 'tanggalLahir',
			type: GraphQLString,
		},
		pendidikan: {
			name: 'pendidikan',
			type: GraphQLString,
		},
		jurusan: {
			name: 'jurusan',
			type: GraphQLString,
		},
		foto: {
			name: 'foto',
			type: GraphQLUpload,
		},
	},
	resolve: update,
}

export const profileUpdate = {
	type: ProfileType,
	args: {
		namaLengkap: {
			name: 'namaLengkap',
			type: GraphQLString,
		},
		alamat: {
			name: 'alamat',
			type: GraphQLString,
		},
		noTelepon: {
			name: 'noTelepon',
			type: GraphQLString,
		},
		jenisKelamin: {
			name: 'jenisKelamin',
			type: GraphQLString,
		},
		tanggalLahir: {
			name: 'tanggalLahir',
			type: GraphQLString,
		},
		pendidikan: {
			name: 'pendidikan',
			type: GraphQLString,
		},
		jurusan: {
			name: 'jurusan',
			type: GraphQLString,
		},
		foto: {
			name: 'foto',
			type: GraphQLUpload,
		},
	},
	resolve: selfUpdate,
}

export const profileRemove = {
	type: ProfileType,
	args: {
		id: {
			name: 'id',
			type: GraphQLID,
		},
	},
	resolve: remove,
}
