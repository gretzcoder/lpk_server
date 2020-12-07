import DataTypes from 'sequelize'

module.exports = (sequelize) => {
	return sequelize.define(
		'trainingClass',
		{
			participantId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: 'actions_unique',
				validate: {
					notNull: {
						args: true,
						msg: `|trainingClasses_participantId|notNull`,
					},
				},
			},
			trainerId: {
				type: DataTypes.INTEGER,
				unique: 'actions_unique',
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|trainingClasses_trainerId|notNull`,
					},
				},
			},
			trainingTypeId: {
				type: DataTypes.INTEGER,
				unique: 'actions_unique',
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|trainingClasses_TrainingTypeId|notNull`,
					},
				},
			},
		},
		{ underscored: true },
		{
			uniqueKeys: {
				actions_unique: {
					fields: ['participantId', 'trainerId', 'trainingTypeId'],
				},
			},
		}
	)
}
