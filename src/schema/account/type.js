import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLList,
	GraphQLInputObjectType,
} from 'graphql'
import { orderByType } from '../tools'

//relation
import ProfileType from '../profile/type'
import { getById as getProfile } from '../profile/resolvers'
import RoleType from '../role/type'
import { getById as getRole } from '../role/resolvers'
import ParticipantType from '../participant/type.js'
import { getById as getParticipants } from '../participant/resolvers.js'
import ProgramType from '../program/type.js'
import { getById as getPrograms } from '../program/resolvers.js'
import CertificateType from '../certificate/type.js'
import { getById as getCertificates } from '../certificate/resolvers.js'
import FileType from '../file/type.js'
import { getById as getFiles } from '../file/resolvers.js'
import PaymentType from '../payment/type'
import { getById as getPayments } from '../payment/resolvers.js'
import TrainingClassType from '../trainingClass/type.js'
import { getById as getTrainingClasses } from '../trainingClass/resolvers.js'

const AccountType = new GraphQLObjectType({
	name: 'account',
	description: 'Sing in credential for a user',

	fields: () => ({
		id: { type: GraphQLID },
		roleId: { type: GraphQLID },
		email: { type: GraphQLString },
		password: { type: GraphQLString },
		createdAt: { type: GraphQLString },
		updatedAt: { type: GraphQLString },
		profile: {
			type: ProfileType,
			resolve(parent, args, context) {
				return getProfile({ accountId: parent.id }, args, context)
			},
		},
		role: {
			type: RoleType,
			resolve(parent, args, context) {
				return getRole({ id: parent.roleId }, args, context)
			},
		},
		participants: {
			type: new GraphQLList(ParticipantType),
			resolve(parent, args, context) {
				return getParticipants({ accountId: parent.id }, args, context)
			},
		},
		createdProgram: {
			type: new GraphQLList(ProgramType),
			resolve(parent, args, context) {
				return getPrograms({ createdBy: parent.id }, args, context)
			},
		},
		lastUpdateProgram: {
			type: new GraphQLList(ProgramType),
			resolve(parent, args, context) {
				return getPrograms({ lastUpdatedBy: parent.id }, args, context)
			},
		},
		VerifyCertificates: {
			type: new GraphQLList(CertificateType),
			args: {
				limit: { type: GraphQLInt },
				offset: { type: GraphQLInt },
				filters: {
					type: new GraphQLInputObjectType({
						name: 'filtersCertificatesFromAccount',
						fields: {
							id: { type: GraphQLID },
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
						name: 'orderByCertificatesFromAccount',
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
			resolve(parent, args, context) {
				return getCertificates({ verifiedBy: parent.id }, args, context)
			},
		},
		selectionFiles: {
			type: new GraphQLList(FileType),
			args: {
				limit: { type: GraphQLInt },
				offset: { type: GraphQLInt },
				filters: {
					type: new GraphQLInputObjectType({
						name: 'filtersFilesFromAccount',
						fields: {
							id: { type: GraphQLID },
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
						name: 'orderByFilesFromAccount',
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
			resolve(parent, args, context) {
				return getFiles({ selectionBy: parent.id }, args, context)
			},
		},
		VerifyPayments: {
			type: new GraphQLList(PaymentType),
			args: {
				limit: { type: GraphQLInt },
				offset: { type: GraphQLInt },
				filters: {
					type: new GraphQLInputObjectType({
						name: 'filtersPaymentsFromAccount',
						fields: {
							id: { type: GraphQLID },
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
						name: 'orderByPaymentsFromAccount',
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
			resolve(parent, args, context) {
				return getPayments({ verifiedBy: parent.id }, args, context)
			},
		},
		// trainingClasses: {
		// 	type: new GraphQLList(TrainingClassType),
		// 	args: {
		// 		limit: { type: GraphQLInt },
		// 		offset: { type: GraphQLInt },
		// 		filters: {
		// 			type: new GraphQLInputObjectType({
		// 				name: 'filtersTrainingCLassesFromAccount',
		// 				fields: {
		// 					trainingTypeId: { type: GraphQLID },
		// 					scoreId: { type: GraphQLID },
		// 					updatedAt: { type: GraphQLString },
		// 					createdAt: { type: GraphQLString },
		// 				},
		// 			}),
		// 		},
		// 		orderBy: {
		// 			type: new GraphQLInputObjectType({
		// 				name: 'orderByTrainingClassesFromAccount',
		// 				fields: {
		// 					id: { type: orderByType },
		// 					trainingTypeId: { type: orderByType },
		// 					scoreId: { type: orderByType },
		// 					updatedAt: { type: orderByType },
		// 					createdAt: { type: orderByType },
		// 				},
		// 			}),
		// 		},
		// 	},
		// 	resolve(parent, args) {
		// 		return getTrainingClasses({ trainerId: parent.id }, args)
		// 	},
		// },
	}),
})

export default AccountType
