import {
	GraphQLID,
	GraphQLList,
	GraphQLInt,
	GraphQLInputObjectType,
	GraphQLString,
} from 'graphql'

import ProgramTimelineType from '../type.js'
import { getAll } from '../resolvers.js'
import { orderByType } from '../../tools'

export const programTimelines = {
	type: new GraphQLList(ProgramTimelineType),
	args: {
		limit: { type: GraphQLInt },
		offset: { type: GraphQLInt },
		filters: {
			type: new GraphQLInputObjectType({
				name: 'filtersProgramTimelines',
				fields: {
					id: { type: GraphQLID },
					programId: { type: GraphQLID },
					stageId: { type: GraphQLID },
					dimulai: { type: GraphQLString },
					berakhir: { type: GraphQLString },
					pengumuman: { type: GraphQLString },
					pesanLolos: { type: GraphQLString },
					pesanGagal: { type: GraphQLString },
					updatedAt: { type: GraphQLString },
					createdAt: { type: GraphQLString },
				},
			}),
		},
		orderBy: {
			type: new GraphQLInputObjectType({
				name: 'orderByProgramTimelines',
				fields: {
					id: { type: orderByType },
					programId: { type: orderByType },
					stageId: { type: orderByType },
					dimulai: { type: orderByType },
					berakhir: { type: orderByType },
					pengumuman: { type: orderByType },
					pesanLolos: { type: orderByType },
					pesanGagal: { type: orderByType },
					updatedAt: { type: orderByType },
					createdAt: { type: orderByType },
				},
			}),
		},
	},
	resolve: getAll,
}
