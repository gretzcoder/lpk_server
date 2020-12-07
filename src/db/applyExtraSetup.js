export default function (sequelize) {
	const {
		account,
		profile,
		role,
		permission,
		program,
		programTimeline,
		stage,
		trainingClass,
		trainingType,
		score,
		chapter,
		testType,
		participant,
		file,
		certificate,
		payment,
	} = sequelize.models

	account.hasOne(profile, {
		foreignKey: 'accountId',
		onDelete: 'RESTRICT',
	})
	profile.belongsTo(account)

	role.hasMany(account)
	account.belongsTo(role)

	role.belongsToMany(permission, { through: 'permission_roles' })
	permission.belongsToMany(role, { through: 'permission_roles' })

	//Participant
	account.hasMany(participant)
	participant.belongsTo(account)

	program.hasMany(participant)
	participant.belongsTo(program)

	stage.hasMany(participant)
	participant.belongsTo(stage)

	participant.hasOne(file)
	file.belongsTo(participant)

	account.hasMany(file, {
		foreignKey: 'selectionBy',
	})
	file.belongsTo(account, {
		foreignKey: 'selectionBy',
	})

	participant.hasOne(certificate)
	certificate.belongsTo(participant)

	account.hasMany(certificate, {
		foreignKey: 'verifiedBy',
	})
	certificate.belongsTo(account, {
		foreignKey: 'verifiedBy',
	})

	participant.hasMany(payment)
	payment.belongsTo(participant)

	account.hasMany(payment, {
		foreignKey: 'verifiedBy',
	})
	payment.belongsTo(account, {
		foreignKey: 'verifiedBy',
	})

	//Program
	account.hasMany(program, {
		foreignKey: 'createdBy',
	})
	program.belongsTo(account, {
		foreignKey: 'createdBy',
	})

	account.hasMany(program, {
		foreignKey: 'updatedBy',
	})
	program.belongsTo(account, {
		foreignKey: 'updatedBy',
	})

	program.hasMany(programTimeline)
	programTimeline.belongsTo(program)

	stage.hasMany(programTimeline)
	programTimeline.belongsTo(stage)

	//Pelatihan
	participant.hasMany(trainingClass, {
		foreignKey: 'participantId',
	})
	trainingClass.belongsTo(participant, {
		foreignKey: 'participantId',
	})

	account.hasMany(trainingClass, {
		foreignKey: 'trainerId',
	})
	trainingClass.belongsTo(account, {
		foreignKey: 'trainerId',
	})

	trainingType.hasMany(trainingClass)
	trainingClass.belongsTo(trainingType)

	trainingClass.hasMany(score)
	score.belongsTo(trainingClass)

	chapter.hasMany(score)
	score.belongsTo(chapter)

	testType.hasMany(score)
	score.belongsTo(testType)
}
