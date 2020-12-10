'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'training_types',
			[
				{
					id: 1,
					jenis_pelatihan: 'Bahasa Jepang Umum',
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 2,
					jenis_pelatihan: 'Bahasa Jepang Skill Khusus',
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('training_types', null, {})
	},
}
