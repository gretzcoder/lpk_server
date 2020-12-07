import DataTypes from 'sequelize'

module.exports = (sequelize) => {
	return sequelize.define(
		'participant',
		{
			tagihan: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|participant_tagihan|notNull`,
					},
				},
			},
			accountId: {
				type: DataTypes.INTEGER,
				unique: 'actions_unique',
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|participant_accountId|notNull`,
					},
				},
			},
			programId: {
				type: DataTypes.INTEGER,
				unique: 'actions_unique',
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|participant_programId|notNull`,
					},
				},
			},
			stageId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|participant_stageId|notNull`,
					},
				},
			},
		},
		{ underscored: true },
		{
			uniqueKeys: {
				actions_unique: {
					fields: ['accountId', 'programId'],
				},
			},
		}
	)
}
