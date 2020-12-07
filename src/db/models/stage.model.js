import DataTypes from 'sequelize'

module.exports = (sequelize) => {
	return sequelize.define(
		'stage',
		{
			stage: {
				type: DataTypes.STRING,
				unique: {
					args: true,
					msg: '|stages_stage|unique',
				},
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|stage_stage|notNull`,
					},
				},
			},
		},
		{ underscored: true }
	)
}
