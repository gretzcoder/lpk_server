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
import { getAll as getTrainingClassses } from '../trainingClass/resolvers.js'

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
						name: 'filtersTrainingClassessFromAccount',
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
						name: 'orderByTrainingClassessFromAccount',
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
	}),
})

export default trainingTypeType
