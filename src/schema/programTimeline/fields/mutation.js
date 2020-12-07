import { GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql'

import ProgramTimelineType from '../type.js'
import { create, remove, update } from '../resolvers.js'

export const programTimelineCreate = {
	type: ProgramTimelineType,
	args: {
		programId: {
			name: 'programId',
			type: GraphQLID,
		},
		stageId: {
			name: 'stageId',
			type: GraphQLID,
		},
		dimulai: {
			name: 'dimulai',
			type: GraphQLString,
		},
		berakhir: {
			name: 'berakhir',
			type: GraphQLString,
		},
		pengumuman: {
			name: 'pengumuman',
			type: GraphQLString,
		},
		pesanLolos: {
			name: 'pesanLolos',
			type: GraphQLString,
		},
		pesanGagal: {
			name: 'pesanGagal',
			type: GraphQLString,
		},
	},
	resolve: create,
}

export const programTimelineUpdate = {
	type: ProgramTimelineType,
	args: {
		id: {
			name: 'id',
			type: GraphQLNonNull(GraphQLID),
		},
		programId: {
			name: 'programId',
			type: GraphQLID,
		},
		stageId: {
			name: 'stageId',
			type: GraphQLID,
		},
		dimulai: {
			name: 'dimulai',
			type: GraphQLString,
		},
		berakhir: {
			name: 'berakhir',
			type: GraphQLString,
		},
		pengumuman: {
			name: 'pengumuman',
			type: GraphQLString,
		},
		pesanLolos: {
			name: 'pesanLolos',
			type: GraphQLString,
		},
		pesanGagal: {
			name: 'pesanGagal',
			type: GraphQLString,
		},
	},
	resolve: update,
}

export const programTimelineRemove = {
	type: ProgramTimelineType,
	args: {
		id: {
			name: 'id',
			type: GraphQLID,
		},
	},
	resolve: remove,
}
