import { GraphQLID, GraphQLInt, GraphQLNonNull } from 'graphql'

import scoreType from '../type.js'
import { create, remove, update } from '../resolvers.js'

export const scoreCreate = {
	type: scoreType,
	args: {
		nilai: {
			name: 'nilai',
			type: GraphQLInt,
		},
		trainingClassId: {
			name: 'trainingClassId',
			type: GraphQLID,
		},
		testTypeId: {
			name: 'testTypeId',
			type: GraphQLID,
		},
		chapterId: {
			name: 'chapterId',
			type: GraphQLID,
		},
	},
	resolve: create,
}

export const scoreUpdate = {
	type: scoreType,
	args: {
		id: {
			name: 'id',
			type: GraphQLNonNull(GraphQLID),
		},
		nilai: {
			name: 'nilai',
			type: GraphQLInt,
		},
		trainingClassId: {
			name: 'trainingClassId',
			type: GraphQLID,
		},
		testTypeId: {
			name: 'testTypeId',
			type: GraphQLID,
		},
		chapterId: {
			name: 'chapterId',
			type: GraphQLID,
		},
	},
	resolve: update,
}

export const scoreRemove = {
	type: scoreType,
	args: {
		id: {
			name: 'id',
			type: GraphQLID,
		},
	},
	resolve: remove,
}
