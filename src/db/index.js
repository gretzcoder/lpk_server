import databaseConnection from './databaseConnection.js'
import applyExtraSetup from './applyExtraSetup.js'

const modelDefiners = [
	require('./models/account.model'),
	require('./models/profile.model'),
	require('./models/role.model'),
	require('./models/permission.model'),

	require('./models/participant.model'),
	require('./models/file.model'),
	require('./models/certificate.model'),
	require('./models/payment.model'),

	require('./models/program.model'),
	require('./models/programTimeline.model'),
	require('./models/stage.model'),

	require('./models/score.model'),
	require('./models/chapter.model'),
	require('./models/testType.model'),
	require('./models/trainingClass.model'),
	require('./models/trainingType.model'),
]

for (const modelDefiner of modelDefiners) {
	modelDefiner(databaseConnection)
}

applyExtraSetup(databaseConnection)

const models = databaseConnection.models

export { databaseConnection as default, models }
