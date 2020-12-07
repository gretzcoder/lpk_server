import { GraphQLID, GraphQLString, GraphQLNonNull } from 'graphql'

import ChapterType from '../type.js'
import { create, remove } from '../resolvers.js'
import { update } from '../../account/resolvers.js'

export const chapterCreate = {
	type: ChapterType,
	args: {
		pertemuanKe: {
			name: 'pertemuanKe',
			type: GraphQLString,
		},
		judulChapter: {
			name: 'judulChapter',
			type: GraphQLString,
		},
		deskripsiChapter: {
			name: 'deskripsiChapter',
			type: GraphQLString,
		},
	},
	resolve: create,
}

export const chapterUpdate = {
	type: ChapterType,
	args: {
		id: {
			name: 'id',
			type: GraphQLNonNull(GraphQLID),
		},
		pertemuanKe: {
			name: 'pertemuanKe',
			type: GraphQLString,
		},
		judulChapter: {
			name: 'judulChapter',
			type: GraphQLString,
		},
		deskripsiChapter: {
			name: 'deskripsiChapter',
			type: GraphQLString,
		},
	},
	resolve: update,
}

export const chapterRemove = {
	type: ChapterType,
	args: {
		id: {
			name: 'id',
			type: GraphQLID,
		},
	},
	resolve: remove,
}
