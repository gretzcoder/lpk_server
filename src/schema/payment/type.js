import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
} from 'graphql'

//relation
import ParticipantType from '../participant/type.js'
import { getById as getParticipant } from '../participant/resolvers.js'
import AccountType from '../account/type.js'
import { getById as getAccount } from '../account/resolvers.js'

const PaymentType = new GraphQLObjectType({
	name: 'payment',

	fields: () => ({
		id: { type: GraphQLID },
		nominal: { type: GraphQLInt },
		buktiTransfer: { type: GraphQLString },
		updatedAt: { type: GraphQLString },
		createdAt: { type: GraphQLString },
		participant: {
			type: ParticipantType,
			resolve(parent, args) {
				return getParticipant(parent.participantId)
			},
		},
		verifiedBy: {
			type: AccountType,
			resolve(parent, args) {
				return getAccount(parent.verifiedBy)
			},
		},
	}),
})

export default PaymentType
