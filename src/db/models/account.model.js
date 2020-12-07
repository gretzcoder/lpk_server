import DataTypes from 'sequelize'
import bcrypt from 'bcrypt'

module.exports = (sequelize) => {
	return sequelize.define(
		'account',
		{
			roleId: {
				type: DataTypes.INTEGER,
				defaultValue: 2,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|accounts_roleId|notNull`,
					},
				},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: {
					args: true,
					msg: '|accounts_email|unique',
				},
				validate: {
					notNull: {
						args: true,
						msg: `|accounts_email|notNull`,
					},
					isEmail: {
						args: true,
						msg: `|accounts_email|isEmail`,
					},
				},
			},
			password: {
				type: DataTypes.STRING(60),
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|accounts_password|notNull`,
					},
					max(value) {
						if (value.length >= 16) {
							throw new Error('|accounts_password|max(16)')
						}
					},
					min(value) {
						if (value.length < 8) {
							throw new Error('|accounts_password|min(8)')
						}
					},
				},
			},
		},
		{ underscored: true },
		{
			hooks: {
				beforeCreate: (account) => {
					const hash = bcrypt.hashSync(account.password, bcrypt.genSaltSync(10))
					account.password = hash
				},
			},
		}
	)
}
