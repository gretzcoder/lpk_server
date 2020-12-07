import bodyParser from 'body-parser'
import cors from 'cors'

export default function (server) {
	console.info('SETUP - Loading modules...')

	server.use(bodyParser.urlencoded({ extended: false }))
	server.use(bodyParser.json())
	server.use(cors())
}
