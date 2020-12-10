import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLList,
} from 'graphql'

//relation
import ParticipantType from '../participant/type.js'
import { getById as getParticipant } from '../participant/resolvers.js'
import AccountType from '../account/type.js'
import { getById as getAccount } from '../account/resolvers.js'

const FileType = new GraphQLObjectType({
	name: 'file',
	description: 'File that come with participant data',

	fields: () => ({
		id: { type: GraphQLID },
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
		participant: {
			type: GraphQLList(ParticipantType),
			resolve(parent, args) {
				return getParticipant({ id: parent.participantId })
			},
		},
		selectionBy: {
			type: GraphQLList(AccountType),
			resolve(parent, args) {
				return getAccount({ id: parent.selectionBy })
			},
		},
	}),
})

export default FileType
