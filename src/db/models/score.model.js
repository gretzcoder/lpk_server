import DataTypes from 'sequelize'

module.exports = (sequelize) => {
	return sequelize.define(
		'score',
		{
			trainingClassId: {
				type: DataTypes.INTEGER,
				unique: 'actions_unique',
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|scores_trainingClassId|notNull`,
					},
				},
			},
			chapterId: {
				type: DataTypes.INTEGER,
				unique: 'actions_unique',
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|scores_chapterId|notNull`,
					},
				},
			},
			testTypeId: {
				type: DataTypes.INTEGER,
				unique: 'actions_unique',
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|scores_testTypeId|notNull`,
					},
				},
			},
			nilai: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|scores_nilai|notNull`,
					},
				},
			},
		},
		{ underscored: true },
		{
			uniqueKeys: {
				actions_unique: {
					fields: ['trainingClassId', 'chapterId', 'testTypeId'],
				},
			},
		}
	)
}
