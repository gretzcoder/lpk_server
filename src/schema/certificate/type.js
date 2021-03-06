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

const CertificateType = new GraphQLObjectType({
	name: 'certificate',
	description:
		'Certificate that participant upload after successful get from the test',

	fields: () => ({
		id: { type: GraphQLID },
		jft: { type: GraphQLString },
		ssw: { type: GraphQLString },
		updatedAt: { type: GraphQLString },
		createdAt: { type: GraphQLString },
		participant: {
			type: GraphQLList(ParticipantType),
			resolve(parent, args) {
				return getParticipant({ id: parent.participantId })
			},
		},
		verifiedBy: {
			type: GraphQLList(AccountType),
			resolve(parent, args) {
				return getAccount({ id: parent.verifiedBy })
			},
		},
	}),
})

export default CertificateType
