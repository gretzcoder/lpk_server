import { GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql'

import TrainingTypeType from '../type.js'
import { create, remove, update } from '../resolvers.js'

export const trainingTypeCreate = {
	type: TrainingTypeType,
	args: {
		jenisPelatihan: {
			name: 'jenisPelatihan',
			type: GraphQLString,
		},
	},
	resolve: create,
}

export const trainingTypeUpdate = {
	type: TrainingTypeType,
	args: {
		id: {
			name: 'id',
			type: GraphQLNonNull(GraphQLID),
		},
		jenisPelatihan: {
			name: 'jenisPelatihan',
			type: GraphQLString,
		},
	},
	resolve: update,
}

export const trainingTypeRemove = {
	type: TrainingTypeType,
	args: {
		id: {
			name: 'id',
			type: GraphQLID,
		},
	},
	resolve: remove,
}
