import models from '../db/index.js'
import config from '../config/config.json'

export default function (server) {
	console.info('SETUP - Syncing database tables...')

	models
		.query('SET FOREIGN_KEY_CHECKS = 0')
		.then(function () {
			return models.sync({})
		})
		.then(function () {
			return models.query('SET FOREIGN_KEY_CHECKS = 1')
		})
		.then(() => {
			console.info('INFO - Database sync complete.')

			console.info('SETUP - Starting server...')
			server.listen(config.httpPort, (error) => {
				if (error) {
					console.error('ERROR - Unable to start server.')
				} else {
					console.info(`INFO - Server started on port ${config.httpPort}`)
				}
			})
		})
		.catch((err) => {
			console.info('ERROR - ' + err)
			console.error('ERROR - Unable to sync database.')
			console.error('ERROR - Server not started.')
		})
}
