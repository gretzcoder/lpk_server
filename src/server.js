// Imports
import express from 'express'

// App Imports
import setupLoadModules from './setup/loadModules.js'
import setupGraphQL from './setup/graphql.js'
import setupStartServer from './setup/startServer.js'

// Create express server
const server = express()

// Setup load modules
setupLoadModules(server)

// Setup GraphQL
setupGraphQL(server)

// Setup start server
setupStartServer(server)
