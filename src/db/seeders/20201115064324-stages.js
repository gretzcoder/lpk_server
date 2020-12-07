'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'stages',
			[
				{
					id: 1,
					stage: 'registrasi',
				},
				{
					id: 2,
					stage: 'wawancara dan test',
				},
				{
					id: 3,
					stage: 'registrasi ulang',
				},
				{
					id: 4,
					stage: 'pembiayaan',
				},
				{
					id: 5,
					stage: 'sosialisasi',
				},
				{
					id: 6,
					stage: 'pelatihan',
				},
				{
					id: 7,
					stage: 'final test',
				},
				{
					id: 8,
					stage: 'interview with company',
				},
				{
					id: 9,
					stage: 'pemberangkatan',
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('stages', null, {})
	},
}
