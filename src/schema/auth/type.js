import { GraphQLObjectType, GraphQLString } from 'graphql'

import AccountType from '../account/type'

const AuthType = new GraphQLObjectType({
	name: 'auth',

	fields: () => ({
		account: { type: AccountType },
		token: { type: GraphQLString },
	}),
})

export default AuthType
