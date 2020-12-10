import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLList,
} from 'graphql'

//relation
import ProgramType from '../program/type.js'
import { getById as getProgram } from '../program/resolvers.js'
import StageType from '../stage/type.js'
import { getById as getStage } from '../stage/resolvers.js'

const ProgramTimelineType = new GraphQLObjectType({
	name: 'programTimeline',
	description: 'Timelines and Message for some Program',

	fields: () => ({
		id: { type: GraphQLID },
		dimulai: { type: GraphQLString },
		berakhir: { type: GraphQLString },
		pengumuman: { type: GraphQLString },
		pesanLolos: { type: GraphQLString },
		pesanGagal: { type: GraphQLString },
		updatedAt: { type: GraphQLString },
		createdAt: { type: GraphQLString },
		program: {
			type: GraphQLList(ProgramType),
			resolve(parent, args) {
				return getProgram({ id: parent.programId })
			},
		},
		stage: {
			type: StageType,
			resolve(parent, args) {
				return getStage({ id: parent.stageId })
			},
		},
	}),
})

export default ProgramTimelineType
