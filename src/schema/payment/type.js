import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
} from 'graphql'

//relation
import ParticipantType from '../participant/type.js'
import { getById as getParticipant } from '../participant/resolvers.js'
import AccountType from '../account/type.js'
import { getById as getAccount } from '../account/resolvers.js'

const PaymentType = new GraphQLObjectType({
	name: 'payment',
	description: 'Payment management to some Program',

	fields: () => ({
		id: { type: GraphQLID },
		nominal: { type: GraphQLInt },
		buktiTransfer: { type: GraphQLString },
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

export default PaymentType
