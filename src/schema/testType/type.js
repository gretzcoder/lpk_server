import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'

//relation

const testTypeType = new GraphQLObjectType({
	name: 'testType',

	fields: () => ({
		id: { type: GraphQLID },
		jenisTest: { type: GraphQLString },
		updatedAt: { type: GraphQLString },
		createdAt: { type: GraphQLString },
	}),
})

export default testTypeType
