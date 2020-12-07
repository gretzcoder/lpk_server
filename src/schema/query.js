import { GraphQLObjectType } from 'graphql'

import * as account from './account/fields/query.js'
import * as profile from './profile/fields/query.js'
import * as role from './role/fields/query.js'
import * as permission from './permission/fields/query.js'

import * as participant from './participant/fields/query.js'
import * as program from './program/fields/query.js'
import * as programTimeline from './programTimeline/fields/query.js'
import * as file from './file/fields/query.js'
import * as certificate from './certificate/fields/query.js'
import * as payment from './payment/fields/query.js'

import * as chapter from './chapter/fields/query.js'
import * as score from './score/fields/query.js'
import * as testType from './testType/fields/query.js'
import * as trainingClass from './trainingClass/fields/query.js'
import * as trainingType from './trainingType/fields/query.js'

const query = new GraphQLObjectType({
	name: 'query',

	fields: {
		...account,
		...profile,
		...role,
		...permission,
		...chapter,
		...score,
		...testType,
		...trainingClass,
		...trainingType,
		...participant,
		...program,
		...programTimeline,
		...file,
		...certificate,
		...payment,
	},
})

export default query
