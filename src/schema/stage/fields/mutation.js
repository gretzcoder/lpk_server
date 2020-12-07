import { GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql'

import StageType from '../type.js'
import { create, remove, update } from '../resolvers.js'

export const stageCreate = {
	type: StageType,
	args: {
		stage: {
			name: 'stage',
			type: GraphQLString,
		},
	},
	resolve: create,
}

export const stageUpdate = {
	type: StageType,
	args: {
		id: {
			name: 'id',
			type: GraphQLNonNull(GraphQLID),
		},
		stage: {
			name: 'stage',
			type: GraphQLString,
		},
	},
	resolve: update,
}

export const stageRemove = {
	type: StageType,
	args: {
		id: {
			name: 'id',
			type: GraphQLID,
		},
	},
	resolve: remove,
}
