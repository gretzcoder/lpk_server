import { GraphQLString, GraphQLNonNull } from 'graphql'

import AuthType from '../type'
import { signUpResolver, loginResolver } from '../resolvers'

export const signUp = {
	type: AuthType,
	args: {
		email: {
			name: 'email',
			type: GraphQLNonNull(GraphQLString),
		},
		password: {
			name: 'password',
			type: GraphQLNonNull(GraphQLString),
		},
	},

	resolve: signUpResolver,
}

export const login = {
	type: AuthType,
	args: {
		email: {
			name: 'email',
			type: GraphQLNonNull(GraphQLString),
		},
		password: {
			name: 'password',
			type: GraphQLNonNull(GraphQLString),
		},
	},

	resolve: loginResolver,
}
