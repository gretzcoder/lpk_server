import DataTypes from 'sequelize'

module.exports = (sequelize) => {
	return sequelize.define(
		'role',
		{
			peran: {
				type: DataTypes.STRING,
				unique: {
					args: true,
					msg: '|roles_peran|unique',
				},
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|role_peran|notNull`,
					},
				},
			},
		},
		{ underscored: true }
	)
}
