import DataTypes from 'sequelize'

module.exports = (sequelize) => {
	return sequelize.define(
		'certificate',
		{
			participantId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: {
					args: true,
					msg: '|certificates_participantId|unique',
				},
				validate: {
					notNull: {
						args: true,
						msg: `|files_participantId|notNull`,
					},
				},
			},
			verifiedBy: {
				type: DataTypes.INTEGER,
			},
			jft: {
				type: DataTypes.STRING,
			},
			ssw: {
				type: DataTypes.STRING,
			},
		},
		{ underscored: true }
	)
}
