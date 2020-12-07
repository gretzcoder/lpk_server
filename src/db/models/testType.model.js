import DataTypes from 'sequelize'

module.exports = (sequelize) => {
	return sequelize.define(
		'testType',
		{
			jenisTest: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|testTypes_jenisTest|notNull`,
					},
				},
			},
		},
		{ underscored: true }
	)
}
