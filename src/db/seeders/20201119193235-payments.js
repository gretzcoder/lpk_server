'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'payments',
			[
				{
					id: 1,
					participant_id: 1,
					verified_by: 4,
					nominal: 6000000,
					bukti_transfer: 'bukti_transfer 1',
				},
				{
					id: 2,
					participant_id: 2,
					verified_by: 4,
					nominal: 6000000,
					bukti_transfer: 'bukti_transfer 2',
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('payments', null, {})
	},
}
