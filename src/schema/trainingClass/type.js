import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLList,
	GraphQLInt,
	GraphQLString,
	GraphQLInputObjectType,
} from 'graphql'
import { orderByType } from '../tools'

//relation
import ScoreType from '../score/type'
import { getAll as getAllScore } from '../score/resolvers'
import TrainingTypeType from '../trainingType/type'
import { getById as getTrainingType } from '../trainingType/resolvers'
import participantType from '../participant/type'
import { getById as getParticipant } from '../participant/resolvers'
import accountType from '../account/type'
import { getById as getTrainer } from '../account/resolvers'

const trainingClassType = new GraphQLObjectType({
	name: 'trainingClass',

	fields: () => ({
		id: { type: GraphQLID },
		updatedAt: { type: GraphQLString },
		createdAt: { type: GraphQLString },
		scores: {
			type: new GraphQLList(ScoreType),
			args: {
				limit: { type: GraphQLInt },
				offset: { type: GraphQLInt },
				filters: {
					type: new GraphQLInputObjectType({
						name: 'filtersScoresFromRole',
						fields: {
							nilai: { type: GraphQLInt },
							updatedAt: { type: GraphQLString },
							createdAt: { type: GraphQLString },
						},
					}),
				},
				orderBy: {
					type: new GraphQLInputObjectType({
						name: 'orderByScoresFromRole',
						fields: {
							id: { type: orderByType },
							nilai: { type: orderByType },
							updatedAt: { type: orderByType },
							createdAt: { type: orderByType },
						},
					}),
				},
			},
			resolve(parent, args) {
				return getAllScore({ trainingClassId: parent.id }, args)
			},
		},
		trainingType: {
			type: TrainingTypeType,
			resolve(parent, args) {
				return getTrainingType({ id: parent.trainingTypeId })
			},
		},
		participant: {
			type: participantType,
			resolve(parent, args) {
				return getParticipant(parent.participantId)
			},
		},
		trainer: {
			type: accountType,
			resolve(parent, args) {
				return getTrainer(parent.trainerId)
			},
		},
	}),
})

export default trainingClassType
