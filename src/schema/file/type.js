import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'

//relation
import ParticipantType from '../participant/type.js'
import { getById as getParticipant } from '../participant/resolvers.js'
import AccountType from '../account/type.js'
import { getById as getAccount } from '../account/resolvers.js'

const FileType = new GraphQLObjectType({
	name: 'file',

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
			type: ParticipantType,
			resolve(parent, args) {
				return getParticipant(parent.participantId)
			},
		},
		selectionBy: {
			type: AccountType,
			resolve(parent, args) {
				return getAccount(parent.selectionBy)
			},
		},
	}),
})

export default FileType
