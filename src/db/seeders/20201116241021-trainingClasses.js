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
				},
				{
					id: 2,
					participant_id: 1,
					trainer_id: 2,
					training_type_id: 2,
				},
				{
					id: 3,
					participant_id: 2,
					trainer_id: 2,
					training_type_id: 1,
				},
				{
					id: 4,
					participant_id: 2,
					trainer_id: 2,
					training_type_id: 2,
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('training_classes', null, {})
	},
}
