import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLInputObjectType,
} from 'graphql'
import { orderByType } from '../tools'

//relation
import accountType from '../account/type'
import { getById as getAccount } from '../account/resolvers'
import programType from '../program/type'
import { getById as getProgram } from '../program/resolvers'
import stageType from '../stage/type'
import { getById as getStage } from '../stage/resolvers'
import trainingClassType from '../trainingClass/type.js'
import { getById as getTrainingClasses } from '../trainingClass/resolvers.js'
import fileType from '../file/type.js'
import { getById as getFile } from '../file/resolvers.js'
import certificateType from '../certificate/type.js'
import { getById as getCertificate } from '../certificate/resolvers.js'
import paymentType from '../payment/type.js'
import { getById as getPayments } from '../payment/resolvers.js'

const participantType = new GraphQLObjectType({
	name: 'participant',
	description: 'Data of user that join some program',

	fields: () => ({
		id: { type: GraphQLID },
		tagihan: { type: GraphQLInt },
		updatedAt: { type: GraphQLString },
		createdAt: { type: GraphQLString },
		account: {
			type: GraphQLList(accountType),
			resolve(parent, args) {
				return getAccount({ id: parent.accountId }, args)
			},
		},
		program: {
			type: GraphQLList(programType),
			resolve(parent, args) {
				return getProgram({ id: parent.programId })
			},
		},
		stage: {
			type: stageType,
			resolve(parent, args) {
				return getStage({ id: parent.stageId })
			},
		},
		certificate: {
			type: GraphQLList(certificateType),
			resolve(parent, args) {
				return getCertificate({ participantId: parent.id })
			},
		},
		file: {
			type: GraphQLList(fileType),
			resolve(parent, args) {
				return getFile({ participantId: parent.id })
			},
		},
		payments: {
			type: GraphQLList(paymentType),
			resolve(parent, args) {
				return getPayments({ participantId: parent.id })
			},
		},
		trainingClasses: {
			type: new GraphQLList(trainingClassType),
			args: {
				limit: { type: GraphQLInt },
				offset: { type: GraphQLInt },
				filters: {
					type: new GraphQLInputObjectType({
						name: 'filtersTrainingCLassesFromParticipant',
						fields: {
							id: { type: GraphQLID },
							trainingTypeId: { type: GraphQLID },
							scoreId: { type: GraphQLID },
							updatedAt: { type: GraphQLString },
							createdAt: { type: GraphQLString },
						},
					}),
				},
				orderBy: {
					type: new GraphQLInputObjectType({
						name: 'orderByTrainingClassesFromParticipant',
						fields: {
							id: { type: orderByType },
							trainingTypeId: { type: orderByType },
							scoreId: { type: orderByType },
							updatedAt: { type: orderByType },
							createdAt: { type: orderByType },
						},
					}),
				},
			},
			resolve(parent, args) {
				return getTrainingClasses({ participantId: parent.id }, args)
			},
		},
	}),
})

export default participantType
