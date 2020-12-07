import { GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql'

import TrainingClassType from '../type.js'
import { create, remove, update } from '../resolvers.js'

export const trainingClassCreate = {
	type: TrainingClassType,
	args: {
		participantId: {
			name: 'participantId',
			type: GraphQLID,
		},
		trainerId: {
			name: 'trainerId',
			type: GraphQLID,
		},
		trainingTypeId: {
			name: 'trainingTypeId',
			type: GraphQLID,
		},
	},
	resolve: create,
}

export const trainingClassUpdate = {
	type: TrainingClassType,
	args: {
		id: {
			name: 'id',
			type: GraphQLNonNull(GraphQLID),
		},
		trainerId: {
			name: 'trainerId',
			type: GraphQLID,
		},
		trainingTypeId: {
			name: 'trainingTypeId',
			type: GraphQLID,
		},
	},
	resolve: update,
}

export const trainingClassRemove = {
	type: TrainingClassType,
	args: {
		id: {
			name: 'id',
			type: GraphQLID,
		},
	},
	resolve: remove,
}
