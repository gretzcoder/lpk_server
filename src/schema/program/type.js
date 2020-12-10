import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLList,
	GraphQLInt,
	GraphQLInputObjectType,
} from 'graphql'
import { orderByType } from '../tools'

//relation
import AccountType from '../account/type.js'
import { getById as getAccount } from '../account/resolvers.js'
import ProgramTimelineType from '../programTimeline/type.js'
import { getById as getProgramTimelines } from '../programTimeline/resolvers.js'
import ParticipantType from '../participant/type.js'
import { getById as getParticipants } from '../participant/resolvers.js'

const ProgramType = new GraphQLObjectType({
	name: 'program',
	description: 'All Program has been Opened and Closed by Admin',

	fields: () => ({
		id: { type: GraphQLID },
		namaProgram: { type: GraphQLString },
		deskripsiProgram: { type: GraphQLString },
		biayaProgram: { type: GraphQLInt },
		fotoProgram: { type: GraphQLString },
		updatedAt: { type: GraphQLString },
		createdAt: { type: GraphQLString },
		createdBy: {
			type: GraphQLList(AccountType),
			resolve(parent, args) {
				return getAccount({ id: parent.createdBy })
			},
		},
		lastUpdatedBy: {
			type: GraphQLList(AccountType),
			resolve(parent, args) {
				return getAccount({ id: parent.lastUpdatedBy })
			},
		},
		programTimelines: {
			type: new GraphQLList(ProgramTimelineType),
			args: {
				limit: { type: GraphQLInt },
				offset: { type: GraphQLInt },
				filters: {
					type: new GraphQLInputObjectType({
						name: 'filtersProgramTimelinesFromProgram',
						fields: {
							id: { type: GraphQLID },
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
						name: 'orderByProgramTimelinesFromProgram',
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
						},
					}),
				},
			},
			resolve(parent, args) {
				return getProgramTimelines({ programId: parent.id }, args)
			},
		},
		participants: {
			type: new GraphQLList(ParticipantType),
			args: {
				limit: { type: GraphQLInt },
				offset: { type: GraphQLInt },
				filters: {
					type: new GraphQLInputObjectType({
						name: 'filtersParticipantsFromProgram',
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
						name: 'orderByParticipantsFromProgram',
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
				return getParticipants({ programId: parent.id }, args)
			},
		},
	}),
})

export default ProgramType
