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
			},
			{
				id: 2,
				tagihan: 12000000,
				account_id: 6,
				program_id: 2,
				stage_id: 1,
			},
		])
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('participants', null, {})
	},
}
