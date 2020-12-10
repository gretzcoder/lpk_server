'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'programs',
			[
				{
					id: 1,
					nama_program: 'nama program pertama',
					deskripsi_program: 'deskripsi Program pertama',
					biaya_program: 12000000,
					foto_program: 'foto_program pertama',
					created_by: 1,
					last_updated_by: 1,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 2,
					nama_program: 'nama program kedua',
					deskripsi_program: 'deskripsi Program kedua',
					biaya_program: 12000000,
					foto_program: 'foto_program kedua',
					created_by: 1,
					last_updated_by: 1,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('programs', null, {})
	},
}
