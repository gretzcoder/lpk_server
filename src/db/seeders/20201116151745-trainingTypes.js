'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'training_types',
			[
				{
					id: 1,
					jenis_pelatihan: 'Bahasa Jepang Umum',
				},
				{
					id: 2,
					jenis_pelatihan: 'Bahasa Jepang Skill Khusus',
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('training_types', null, {})
	},
}
