'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('participants', [
			{
				id: 1,
				tagihan: 12000000,
				account_id: 5,
				program_id: 1,
				stage_id: 2,
				created_at: '2021-01-01 00:00:00',
				updated_at: '2021-01-01 00:00:00',
			},
			{
				id: 2,
				tagihan: 12000000,
				account_id: 6,
				program_id: 2,
				stage_id: 1,
				created_at: '2021-01-01 00:00:00',
				updated_at: '2021-01-01 00:00:00',
			},
		])
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('participants', null, {})
	},
}
