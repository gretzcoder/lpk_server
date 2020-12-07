import { GraphQLID, GraphQLInt, GraphQLNonNull } from 'graphql'

import participantType from '../type.js'
import { register, remove, update } from '../resolvers.js'

export const participantRegister = {
	type: participantType,
	args: {
		programId: {
			name: 'programId',
			type: GraphQLID,
		},
	},
	resolve: register,
}

export const participantUpdate = {
	type: participantType,
	args: {
		id: {
			name: 'id',
			type: GraphQLNonNull(GraphQLID),
		},
		tagihan: {
			name: 'tagihan',
			type: GraphQLInt,
		},
		programId: {
			name: 'programId',
			type: GraphQLID,
		},
		stageId: {
			name: 'stageId',
			type: GraphQLID,
		},
	},
	resolve: update,
}

export const participantRemove = {
	type: participantType,
	args: {
		id: {
			name: 'id',
			type: GraphQLID,
		},
	},
	resolve: remove,
}
