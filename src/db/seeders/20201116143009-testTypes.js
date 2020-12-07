'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'test_types',
			[
				{
					id: 1,
					jenis_test: 'listening',
				},
				{
					id: 2,
					jenis_test: 'writing',
				},
				{
					id: 3,
					jenis_test: 'speaking',
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('test_types', null, {})
	},
}
