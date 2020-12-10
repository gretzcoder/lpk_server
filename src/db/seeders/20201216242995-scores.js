'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'scores',
			[
				{
					id: 1,
					training_class_id: 1,
					chapter_id: 1,
					test_type_id: 1,
					nilai: 85,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 2,
					training_class_id: 1,
					chapter_id: 1,
					test_type_id: 2,
					nilai: 80,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 3,
					training_class_id: 1,
					chapter_id: 2,
					test_type_id: 1,
					nilai: 80,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 4,
					training_class_id: 1,
					chapter_id: 2,
					test_type_id: 2,
					nilai: 85,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 5,
					training_class_id: 2,
					chapter_id: 1,
					test_type_id: 1,
					nilai: 75,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 6,
					training_class_id: 2,
					chapter_id: 1,
					test_type_id: 2,
					nilai: 70,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 7,
					training_class_id: 2,
					chapter_id: 2,
					test_type_id: 1,
					nilai: 75,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 8,
					training_class_id: 2,
					chapter_id: 2,
					test_type_id: 2,
					nilai: 70,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('scores', null, {})
	},
}
