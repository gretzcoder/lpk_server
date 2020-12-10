'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'test_types',
			[
				{
					id: 1,
					jenis_test: 'listening',
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 2,
					jenis_test: 'writing',
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 3,
					jenis_test: 'speaking',
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('test_types', null, {})
	},
}
