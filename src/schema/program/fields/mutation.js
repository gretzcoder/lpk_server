import { GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql'
import { GraphQLUpload } from 'graphql-upload'

import ProgramType from '../type.js'
import { create, remove, update } from '../resolvers.js'

export const programCreate = {
	type: ProgramType,
	args: {
		namaProgram: {
			name: 'namaProgram',
			type: GraphQLString,
		},
		deskripsiProgram: {
			name: 'deskripsiProgram',
			type: GraphQLString,
		},
		biayaProgram: {
			name: 'biayaProgram',
			type: GraphQLInt,
		},
		fotoProgram: {
			name: 'fotoProgram',
			type: GraphQLUpload,
		},
		createdBy: {
			name: 'createdBy',
			type: GraphQLID,
		},
		lastUpdatedBy: {
			name: 'lastUpdatedBy',
			type: GraphQLID,
		},
	},
	resolve: create,
}

export const programUpdate = {
	type: ProgramType,
	args: {
		id: {
			name: 'id',
			type: GraphQLNonNull(GraphQLID),
		},
		namaProgram: {
			name: 'namaProgram',
			type: GraphQLString,
		},
		deskripsiProgram: {
			name: 'deskripsiProgram',
			type: GraphQLString,
		},
		biayaProgram: {
			name: 'biayaProgram',
			type: GraphQLInt,
		},
		fotoProgram: {
			name: 'fotoProgram',
			type: GraphQLUpload,
		},
		lastUpdatedBy: {
			name: 'lastUpdatedBy',
			type: GraphQLID,
		},
	},
	resolve: update,
}

export const programRemove = {
	type: ProgramType,
	args: {
		id: {
			name: 'id',
			type: GraphQLID,
		},
	},
	resolve: remove,
}
