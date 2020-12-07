import {
	GraphQLID,
	GraphQLList,
	GraphQLInt,
	GraphQLInputObjectType,
	GraphQLString,
} from 'graphql'

import ChapterType from '../type.js'
import { getAll, getById } from '../resolvers.js'
import { orderByType } from '../../tools'

export const chapters = {
	type: new GraphQLList(ChapterType),
	args: {
		limit: { type: GraphQLInt },
		offset: { type: GraphQLInt },
		filters: {
			type: new GraphQLInputObjectType({
				name: 'filtersChapters',
				fields: {
					id: { type: GraphQLID },
					pertemuanKe: { type: GraphQLString },
					judulChapter: { type: GraphQLString },
					deskripsiChapter: { type: GraphQLString },
					updatedAt: { type: GraphQLString },
					createdAt: { type: GraphQLString },
				},
			}),
		},
		orderBy: {
			type: new GraphQLInputObjectType({
				name: 'orderByChapters',
				fields: {
					id: { type: orderByType },
					pertemuanKe: { type: orderByType },
					judulChapter: { type: orderByType },
					deskripsiChapter: { type: orderByType },
					updatedAt: { type: orderByType },
					createdAt: { type: orderByType },
				},
			}),
		},
	},
	resolve: getAll,
}

export const chapter = {
	type: ChapterType,

	resolve: getById,
}
