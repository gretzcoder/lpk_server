import DataTypes from 'sequelize'

module.exports = (sequelize) => {
	return sequelize.define(
		'payment',
		{
			participantId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|payment_participantId|notNull`,
					},
				},
			},
			verifiedBy: {
				type: DataTypes.INTEGER,
			},
			nominal: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|payment_nominal|notNull`,
					},
				},
			},
			buktiTransfer: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|payment_buktiTransfer|notNull`,
					},
				},
			},
		},
		{ underscored: true }
	)
}
