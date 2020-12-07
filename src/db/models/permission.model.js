import DataTypes from 'sequelize'

module.exports = (sequelize) => {
	return sequelize.define(
		'permission',
		{
			permission: {
				type: DataTypes.STRING(20),
				unique: {
					args: true,
					msg: '|permissions_permission|unique',
				},
			},
		},
		{ underscored: true }
	)
}
