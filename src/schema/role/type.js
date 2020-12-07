import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLList,
	GraphQLInt,
	GraphQLInputObjectType,
} from 'graphql'
import { getPermission, orderByType } from '../tools'

//relation
import AccountType from '../account/type'
import { getById as getAccounts } from '../account/resolvers'

import PermissionType from '../permission/type'
import { getById as getPermissions } from '../permission/resolvers'

const RoleType = new GraphQLObjectType({
	name: 'role',
	description: 'All roles in this server',

	fields: () => ({
		id: { type: GraphQLID },
		peran: { type: GraphQLString },
		updatedAt: { type: GraphQLString },
		createdAt: { type: GraphQLString },
		accounts: {
			type: new GraphQLList(AccountType),
			args: {
				limit: { type: GraphQLInt },
				offset: { type: GraphQLInt },
				filters: {
					type: new GraphQLInputObjectType({
						name: 'filtersAccountsFromRole',
						fields: {
							id: { type: GraphQLID },
							email: { type: GraphQLString },
							updatedAt: { type: GraphQLString },
							createdAt: { type: GraphQLString },
						},
					}),
				},
				orderBy: {
					type: new GraphQLInputObjectType({
						name: 'orderByAccountsFromRole',
						fields: {
							id: { type: orderByType },
							email: { type: orderByType },
							updatedAt: { type: orderByType },
							createdAt: { type: orderByType },
						},
					}),
				},
			},
			resolve(parent, args, context) {
				return getAccounts({ roleId: parent.id }, args, context)
			},
		},
		permissions: {
			type: new GraphQLList(PermissionType),
			args: {
				limit: { type: GraphQLInt },
				offset: { type: GraphQLInt },
				filters: {
					type: new GraphQLInputObjectType({
						name: 'filtersPermissionsFromRole',
						fields: {
							id: { type: GraphQLID },
							permission: { type: GraphQLString },
							updatedAt: { type: GraphQLString },
							createdAt: { type: GraphQLString },
						},
					}),
				},
				orderBy: {
					type: new GraphQLInputObjectType({
						name: 'orderByPermissionsFromRole',
						fields: {
							id: { type: orderByType },
							permission: { type: orderByType },
							updatedAt: { type: orderByType },
							createdAt: { type: orderByType },
						},
					}),
				},
			},
			resolve(parent, args, context) {
				return getPermissions({ id: parent.id }, args, context)
			},
		},
	}),
})

export default RoleType
