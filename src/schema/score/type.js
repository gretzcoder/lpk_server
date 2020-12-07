import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLInt,
	GraphQLString,
} from 'graphql'

//relation
import trainingClassType from '../trainingClass/type.js'
import { getById as getTrainingClass } from '../trainingClass/resolvers.js'
import chapterType from '../chapter/type.js'
import { getById as getChapter } from '../chapter/resolvers.js'
import testTypeType from '../testType/type.js'
import { getById as getTestType } from '../testType/resolvers.js'

const scoreType = new GraphQLObjectType({
	name: 'score',

	fields: () => ({
		id: { type: GraphQLID },
		nilai: { type: GraphQLInt },
		updatedAt: { type: GraphQLString },
		createdAt: { type: GraphQLString },
		trainingClass: {
			type: trainingClassType,
			resolve(parent, args) {
				return getTrainingClass(parent.trainingClassId)
			},
		},
		chapter: {
			type: chapterType,
			resolve(parent, args) {
				return getChapter(parent.chapterId)
			},
		},
		testType: {
			type: testTypeType,
			resolve(parent, args) {
				return getTestType(parent.testTypeId)
			},
		},
	}),
})

export default scoreType
