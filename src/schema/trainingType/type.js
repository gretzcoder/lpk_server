import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLList,
	GraphQLInputObjectType,
} from 'graphql'
import { orderByType } from '../tools'

//relation
import TrainingClassType from '../trainingClass/type.js'
import { getById as getTrainingClassses } from '../trainingClass/resolvers.js'
import ChapterType from '../chapter/type.js'
import { getById as getChapters } from '../chapter/resolvers.js'

const trainingTypeType = new GraphQLObjectType({
	name: 'trainingType',

	fields: () => ({
		id: { type: GraphQLID },
		jenisPelatihan: { type: GraphQLString },
		updatedAt: { type: GraphQLString },
		createdAt: { type: GraphQLString },
		trainingClasses: {
			type: new GraphQLList(TrainingClassType),
			args: {
				limit: { type: GraphQLInt },
				offset: { type: GraphQLInt },
				filters: {
					type: new GraphQLInputObjectType({
						name: 'filtersChaptersFromTrainingType',
						fields: {
							trainingTypeId: { type: GraphQLID },
							scoreId: { type: GraphQLID },
							updatedAt: { type: GraphQLString },
							createdAt: { type: GraphQLString },
						},
					}),
				},
				orderBy: {
					type: new GraphQLInputObjectType({
						name: 'orderByChaptersFromTrainingType',
						fields: {
							id: { type: orderByType },
							trainingTypeId: { type: orderByType },
							scoreId: { type: orderByType },
							updatedAt: { type: orderByType },
							createdAt: { type: orderByType },
						},
					}),
				},
			},
			resolve(parent, args) {
				return getTrainingClassses({ trainingTypeId: parent.id }, args)
			},
		},
		chapters: {
			type: new GraphQLList(ChapterType),
			args: {
				limit: { type: GraphQLInt },
				offset: { type: GraphQLInt },
				filters: {
					type: new GraphQLInputObjectType({
						name: 'filtersTrainingClassessFromTrainingType',
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
						name: 'orderByTrainingClassessFromTrainingType',
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
			resolve(parent, args) {
				return getChapters({ trainingTypeId: parent.id }, args)
			},
		},
	}),
})

export default trainingTypeType
