import { GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql'

import PermissionType from '../type.js'
import { create, remove, update } from '../resolvers.js'

export const permissionCreate = {
	type: PermissionType,
	args: {
		permission: {
			name: 'permission',
			type: GraphQLString,
		},
	},
	resolve: create,
}

export const permissionUpdate = {
	type: PermissionType,
	args: {
		id: {
			name: 'id',
			type: GraphQLNonNull(GraphQLID),
		},
		permission: {
			name: 'permission',
			type: GraphQLString,
		},
	},
	resolve: update,
}

export const permissionRemove = {
	type: PermissionType,
	args: {
		id: {
			name: 'id',
			type: GraphQLID,
		},
	},
	resolve: remove,
}
