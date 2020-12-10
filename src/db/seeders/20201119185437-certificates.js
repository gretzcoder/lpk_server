'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'certificates',
			[
				{
					id: 1,
					participant_id: 1,
					verified_by: 3,
					jft: 'jft 1',
					ssw: 'ssw 1',
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 2,
					participant_id: 2,
					verified_by: 3,
					jft: 'jft 2',
					ssw: 'ssw 2',
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('certificates', null, {})
	},
}
