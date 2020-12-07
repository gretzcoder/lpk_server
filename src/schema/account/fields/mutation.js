import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql'

import AccountType from '../type'
import { create, remove, update, selfUpdate } from '../resolvers'

export const accountCreate = {
	type: AccountType,
	args: {
		roleId: {
			name: 'roleId',
			type: GraphQLID,
		},
		email: {
			name: 'email',
			type: GraphQLString,
		},
		password: {
			name: 'password',
			type: GraphQLString,
		},
	},
	resolve: create,
}

export const accountUpdate = {
	type: AccountType,
	args: {
		email: {
			name: 'email',
			type: GraphQLString,
		},
		password: {
			name: 'password',
			type: GraphQLString,
		},
	},
	resolve: selfUpdate,
}

export const accountAdminUpdate = {
	type: AccountType,
	args: {
		id: {
			name: 'id',
			type: GraphQLNonNull(GraphQLID),
		},
		roleId: {
			name: 'roleId',
			type: GraphQLID,
		},
		email: {
			name: 'email',
			type: GraphQLString,
		},
		password: {
			name: 'password',
			type: GraphQLString,
		},
	},
	resolve: update,
}

export const accountRemove = {
	type: AccountType,
	args: {
		id: {
			name: 'id',
			type: GraphQLID,
		},
	},
	resolve: remove,
}
