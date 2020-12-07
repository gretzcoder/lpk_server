import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLList,
} from 'graphql'

//relation
import AccountType from '../account/type.js'
import { getById as getAccount } from '../account/resolvers.js'

const ProfileType = new GraphQLObjectType({
	name: 'profile',
	description: 'Information of a user',

	fields: () => ({
		id: { type: GraphQLID },
		namaLengkap: { type: GraphQLString },
		alamat: { type: GraphQLString },
		noTelepon: { type: GraphQLString },
		jenisKelamin: { type: GraphQLString },
		tanggalLahir: { type: GraphQLString },
		pendidikan: { type: GraphQLString },
		jurusan: { type: GraphQLString },
		foto: { type: GraphQLString },
		updatedAt: { type: GraphQLString },
		createdAt: { type: GraphQLString },
		account: {
			type: GraphQLList(AccountType),
			resolve(parent, args, context) {
				return getAccount({ id: parent.accountId }, args, context)
			},
		},
	}),
})

export default ProfileType
