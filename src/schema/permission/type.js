import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLList,
	GraphQLInt,
	GraphQLInputObjectType,
} from 'graphql'
import { orderByType } from '../tools'

//relation
import RoleType from '../role/type'
import { getById as getRoles } from '../role/resolvers'

const PermissionType = new GraphQLObjectType({
	name: 'permission',
	description: 'All permissions in this server',

	fields: () => ({
		id: { type: GraphQLID },
		permission: { type: GraphQLString },
		updatedAt: { type: GraphQLString },
		createdAt: { type: GraphQLString },
		roles: {
			type: new GraphQLList(RoleType),
			args: {
				limit: { type: GraphQLInt },
				offset: { type: GraphQLInt },
				filters: {
					type: new GraphQLInputObjectType({
						name: 'filtersRolesFromPermission',
						fields: {
							id: { type: GraphQLID },
							peran: { type: GraphQLString },
							updatedAt: { type: GraphQLString },
							createdAt: { type: GraphQLString },
						},
					}),
				},
				orderBy: {
					type: new GraphQLInputObjectType({
						name: 'orderByRolesFromPermission',
						fields: {
							id: { type: orderByType },
							peran: { type: orderByType },
							updatedAt: { type: orderByType },
							createdAt: { type: orderByType },
						},
					}),
				},
			},
			resolve(parent, args) {
				return getRoles({ from: 'permission', id: parent.id }, args)
			},
		},
	}),
})

export default PermissionType
