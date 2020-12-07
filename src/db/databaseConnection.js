import Sequelize from 'sequelize'
import dbConfig from './config/config'

const dbConfigEnv = dbConfig[process.env.NODE_ENV]

const connection = new Sequelize(
	dbConfigEnv.database,
	dbConfigEnv.username,
	dbConfigEnv.password,
	{
		host: dbConfigEnv.host,
		dialect: dbConfigEnv.dialect,
		logging: false,
	}
)

console.info('SETUP - Connecting database...')

connection
	.authenticate()
	.then(() => {
		console.info('INFO - Database connected.')
	})
	.catch((err) => {
		console.error('ERROR - Unable to connect to the database:', err)
	})

export default connection
