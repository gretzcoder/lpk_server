import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'

const ChapterType = new GraphQLObjectType({
	name: 'chapter',

	fields: () => ({
		id: { type: GraphQLID },
		pertemuanKe: { type: GraphQLString },
		judulChapter: { type: GraphQLString },
		deskripsiChapter: { type: GraphQLString },
		updatedAt: { type: GraphQLString },
		createdAt: { type: GraphQLString },
	}),
})

export default ChapterType
