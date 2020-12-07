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
import { getAll as getTrainingClasses } from '../trainingClass/resolvers.js'
import fileType from '../file/type.js'
import { getAll as getFiles } from '../file/resolvers.js'
import certificateType from '../certificate/type.js'
import { getById as getCertificate } from '../certificate/resolvers.js'
import paymentType from '../payment/type.js'
import { getAll as getPayments } from '../payment/resolvers.js'

const participantType = new GraphQLObjectType({
	name: 'participant',
	description: 'Data of user that join some program',

	fields: () => ({
		id: { type: GraphQLID },
		tagihan: { type: GraphQLInt },
		updatedAt: { type: GraphQLString },
		createdAt: { type: GraphQLString },
		account: {
			type: accountType,
			resolve(parent, args, context) {
				return getAccount({ id: parent.accountId }, args, context)
			},
		},
		program: {
			type: programType,
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
			type: certificateType,
			resolve(parent, args) {
				return getCertificate({ participantId: parent.Id })
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
		files: {
			type: new GraphQLList(fileType),
			args: {
				limit: { type: GraphQLInt },
				offset: { type: GraphQLInt },
				filters: {
					type: new GraphQLInputObjectType({
						name: 'filtersFilesFromParticipant',
						fields: {
							selectionBy: { type: GraphQLID },
							cv: { type: GraphQLString },
							ktp: { type: GraphQLString },
							pasPhoto: { type: GraphQLString },
							ijazah: { type: GraphQLString },
							transkripNilai: { type: GraphQLString },
							sertifikat: { type: GraphQLString },
							skck: { type: GraphQLString },
							suratKesehatan: { type: GraphQLString },
							suratPersetujuanOrangtua: { type: GraphQLString },
							updatedAt: { type: GraphQLString },
							createdAt: { type: GraphQLString },
						},
					}),
				},
				orderBy: {
					type: new GraphQLInputObjectType({
						name: 'orderByFilesFromParticipant',
						fields: {
							id: { type: orderByType },
							selectionBy: { type: orderByType },
							cv: { type: orderByType },
							ktp: { type: orderByType },
							pasPhoto: { type: orderByType },
							ijazah: { type: orderByType },
							transkripNilai: { type: orderByType },
							sertifikat: { type: orderByType },
							skck: { type: orderByType },
							suratKesehatan: { type: orderByType },
							suratPersetujuanOrangtua: { type: orderByType },
							updatedAt: { type: orderByType },
							createdAt: { type: orderByType },
						},
					}),
				},
			},
			resolve(parent, args) {
				return getFiles({ participantId: parent.id }, args)
			},
		},
		certificates: {
			type: new GraphQLList(certificateType),
			args: {
				limit: { type: GraphQLInt },
				offset: { type: GraphQLInt },
				filters: {
					type: new GraphQLInputObjectType({
						name: 'filtersCertificatesFromParticipant',
						fields: {
							participantId: { type: GraphQLID },
							verifiedBy: { type: GraphQLID },
							jft: { type: GraphQLString },
							ssw: { type: GraphQLString },
							updatedAt: { type: GraphQLString },
							createdAt: { type: GraphQLString },
						},
					}),
				},
				orderBy: {
					type: new GraphQLInputObjectType({
						name: 'orderByCertificatesFromParticipant',
						fields: {
							id: { type: orderByType },
							participantId: { type: orderByType },
							verifiedBy: { type: orderByType },
							jft: { type: orderByType },
							ssw: { type: orderByType },
							updatedAt: { type: orderByType },
							createdAt: { type: orderByType },
						},
					}),
				},
			},
			resolve(parent, args) {
				return getCertificates({ participantId: parent.id }, args)
			},
		},
		payments: {
			type: new GraphQLList(paymentType),
			args: {
				limit: { type: GraphQLInt },
				offset: { type: GraphQLInt },
				filters: {
					type: new GraphQLInputObjectType({
						name: 'filtersPaymentsFromParticipant',
						fields: {
							participantId: { type: GraphQLID },
							verifiedBy: { type: GraphQLID },
							nominal: { type: GraphQLInt },
							buktiTransfer: { type: GraphQLString },
							updatedAt: { type: GraphQLString },
							createdAt: { type: GraphQLString },
						},
					}),
				},
				orderBy: {
					type: new GraphQLInputObjectType({
						name: 'orderByPaymentsFromParticipant',
						fields: {
							id: { type: orderByType },
							participantId: { type: orderByType },
							verifiedBy: { type: orderByType },
							nominal: { type: orderByType },
							buktiTransfer: { type: orderByType },
							updatedAt: { type: orderByType },
							createdAt: { type: orderByType },
						},
					}),
				},
			},
			resolve(parent, args) {
				return getPayments({ participantId: parent.id }, args)
			},
		},
	}),
})

export default participantType
