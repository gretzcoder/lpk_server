import { GraphQLObjectType } from 'graphql'

import * as auth from './auth/fields/mutation.js'
import * as account from './account/fields/mutation.js'
import * as profile from './profile/fields/mutation.js'
import * as role from './role/fields/mutation.js'
import * as permission from './permission/fields/mutation.js'

import * as participant from './participant/fields/mutation.js'
import * as program from './program/fields/mutation.js'
import * as programTimeline from './programTimeline/fields/mutation.js'
import * as file from './file/fields/mutation.js'
import * as certificate from './certificate/fields/mutation.js'
import * as payment from './payment/fields/mutation.js'

import * as chapter from './chapter/fields/mutation.js'
import * as score from './score/fields/mutation.js'
import * as testType from './testType/fields/mutation.js'
import * as trainingClass from './trainingClass/fields/mutation.js'
import * as trainingType from './trainingType/fields/mutation.js'

const mutation = new GraphQLObjectType({
	name: 'mutation',

	fields: {
		...auth,
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

export default mutation
