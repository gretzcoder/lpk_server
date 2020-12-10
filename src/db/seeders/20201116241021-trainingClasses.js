'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'training_classes',
			[
				{
					id: 1,
					participant_id: 1,
					trainer_id: 2,
					training_type_id: 1,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 2,
					participant_id: 1,
					trainer_id: 2,
					training_type_id: 2,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 3,
					participant_id: 2,
					trainer_id: 2,
					training_type_id: 1,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 4,
					participant_id: 2,
					trainer_id: 2,
					training_type_id: 2,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('training_classes', null, {})
	},
}
