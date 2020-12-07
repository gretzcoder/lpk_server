import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInputObjectType,
	GraphQLList,
	GraphQLInt,
} from 'graphql'
import { orderByType } from '../tools'

import ProgramTimelineType from '../programTimeline/type.js'
import { getAll as getProgramTimelines } from '../programTimeline/resolvers.js'
import ParticipantType from '../participant/type.js'
import { getAll as getParticipants } from '../participant/resolvers.js'

const stageType = new GraphQLObjectType({
	name: 'stage',

	fields: () => ({
		id: { type: GraphQLID },
		stage: { type: GraphQLString },
		updatedAt: { type: GraphQLString },
		createdAt: { type: GraphQLString },
		programTimelines: {
			type: new GraphQLList(ProgramTimelineType),
			args: {
				limit: { type: GraphQLInt },
				offset: { type: GraphQLInt },
				filters: {
					type: new GraphQLInputObjectType({
						name: 'filtersProgramTimelinesFromStage',
						fields: {
							stageId: { type: GraphQLID },
							dimulai: { type: GraphQLString },
							berakhir: { type: GraphQLString },
							pengumuman: { type: GraphQLString },
							pesanLolos: { type: GraphQLString },
							pesanGagal: { type: GraphQLString },
							updatedAt: { type: GraphQLString },
							createdAt: { type: GraphQLString },
							updatedAt: { type: GraphQLString },
							createdAt: { type: GraphQLString },
						},
					}),
				},
				orderBy: {
					type: new GraphQLInputObjectType({
						name: 'orderByProgramTimelinesFromStage',
						fields: {
							id: { type: orderByType },
							stageId: { type: orderByType },
							dimulai: { type: orderByType },
							berakhir: { type: orderByType },
							pengumuman: { type: orderByType },
							pesanLolos: { type: orderByType },
							pesanGagal: { type: orderByType },
							updatedAt: { type: orderByType },
							createdAt: { type: orderByType },
							updatedAt: { type: orderByType },
							createdAt: { type: orderByType },
						},
					}),
				},
			},
			resolve(parent, args) {
				return getProgramTimelines({ stageId: parent.id }, args)
			},
		},
		participants: {
			type: new GraphQLList(ParticipantType),
			args: {
				limit: { type: GraphQLInt },
				offset: { type: GraphQLInt },
				filters: {
					type: new GraphQLInputObjectType({
						name: 'filtersParticipantsFromStage',
						fields: {
							tagihan: { type: GraphQLInt },
							programId: { type: GraphQLID },
							accountId: { type: GraphQLID },
							stageId: { type: GraphQLID },
							updatedAt: { type: GraphQLString },
							createdAt: { type: GraphQLString },
						},
					}),
				},
				orderBy: {
					type: new GraphQLInputObjectType({
						name: 'orderByParticipantsFromStage',
						fields: {
							id: { type: orderByType },
							tagihan: { type: orderByType },
							programId: { type: orderByType },
							accountId: { type: orderByType },
							stageId: { type: orderByType },
							updatedAt: { type: orderByType },
							createdAt: { type: orderByType },
						},
					}),
				},
			},
			resolve(parent, args) {
				return getParticipants({ stageId: parent.id }, args)
			},
		},
	}),
})

export default stageType
