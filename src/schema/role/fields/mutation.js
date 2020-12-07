import { GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql'

import RoleType from '../type.js'
import {
	create,
	remove,
	update,
	permission,
	rPermission,
} from '../resolvers.js'

export const roleCreate = {
	type: RoleType,
	args: {
		peran: {
			name: 'peran',
			type: GraphQLString,
		},
	},
	resolve: create,
}

export const roleUpdate = {
	type: RoleType,
	args: {
		id: {
			name: 'id',
			type: GraphQLNonNull(GraphQLID),
		},
		peran: {
			name: 'peran',
			type: GraphQLString,
		},
	},
	resolve: update,
}

export const addPermission = {
	type: RoleType,
	args: {
		roleId: {
			name: 'roleId',
			type: GraphQLNonNull(GraphQLID),
		},
		permissionId: {
			name: 'permissionId',
			type: GraphQLNonNull(GraphQLID),
		},
	},
	resolve: permission,
}

export const removePermission = {
	type: RoleType,
	args: {
		roleId: {
			name: 'roleId',
			type: GraphQLNonNull(GraphQLID),
		},
		permissionId: {
			name: 'permissionId',
			type: GraphQLNonNull(GraphQLID),
		},
	},
	resolve: rPermission,
}

export const roleRemove = {
	type: RoleType,
	args: {
		id: {
			name: 'id',
			type: GraphQLID,
		},
	},
	resolve: remove,
}
