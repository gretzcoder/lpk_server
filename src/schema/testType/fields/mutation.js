import { GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql'

import TestTypeType from '../type.js'
import { create, remove, update } from '../resolvers.js'

export const testTypeCreate = {
	type: TestTypeType,
	args: {
		jenisTest: {
			name: 'jenisTest',
			type: GraphQLString,
		},
	},
	resolve: create,
}

export const testTypeUpdate = {
	type: TestTypeType,
	args: {
		id: {
			name: 'id',
			type: GraphQLNonNull(GraphQLID),
		},
		jenisTest: {
			name: 'jenisTest',
			type: GraphQLString,
		},
	},
	resolve: update,
}

export const testTypeRemove = {
	type: TestTypeType,
	args: {
		id: {
			name: 'id',
			type: GraphQLID,
		},
	},
	resolve: remove,
}
