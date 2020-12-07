import { graphqlHTTP } from 'express-graphql'

import schema from '../schema'
import config from '../config/config.json'
import { graphqlUploadExpress } from 'graphql-upload'
import customErrors from '../utils/customErrors'

export default function (server) {
	server.use(
		config.GraphqlEndpoint,
		graphqlUploadExpress({ maxFiles: 10, maxFileSize: 10000000 }),
		graphqlHTTP((request) => ({
			schema,
			graphiql: config.GraphqlIde,
			pretty: config.GraphqlPretty,
			context: request,
			// customFormatErrorFn: (err) => customErrors(err),
		}))
	)
}
