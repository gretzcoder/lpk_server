'use strict'
const bcrypt = require('bcrypt')

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'accounts',
			[
				{
					id: 1,
					role_id: 1,
					email: 'emailAdmin@mail.com',
					password: bcrypt.hashSync('passwardAdmin', bcrypt.genSaltSync(10)),
				},
				{
					id: 2,
					role_id: 5,
					email: 'emailPengajar@mail.com',
					password: bcrypt.hashSync('passwardPengajar', bcrypt.genSaltSync(10)),
				},
				{
					id: 3,
					role_id: 3,
					email: 'emailPenyeleksi@mail.com',
					password: bcrypt.hashSync(
						'passwardPenyeleksi',
						bcrypt.genSaltSync(10)
					),
				},
				{
					id: 4,
					role_id: 4,
					email: 'emailAdminPembayaran@mail.com',
					password: bcrypt.hashSync(
						'passwardAdminPembayaran',
						bcrypt.genSaltSync(10)
					),
				},
				{
					id: 5,
					role_id: 2,
					email: 'emailPeserta1@mail.com',
					password: bcrypt.hashSync('passwardPeserta', bcrypt.genSaltSync(10)),
				},
				{
					id: 6,
					role_id: 2,
					email: 'emailPeserta2@mail.com',
					password: bcrypt.hashSync('passwardPeserta', bcrypt.genSaltSync(10)),
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('accounts', null, {})
	},
}
