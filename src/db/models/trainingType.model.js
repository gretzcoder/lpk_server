import DataTypes from 'sequelize'

module.exports = (sequelize) => {
	return sequelize.define(
		'trainingType',
		{
			jenisPelatihan: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|trainingTypes_jenisPelatihan|notNull`,
					},
				},
			},
		},
		{ underscored: true }
	)
}
