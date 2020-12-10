'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const tables = [
			'Role',
			'Account',
			'Profile',
			'Program',
			'Stage',
			'Participant',
			'Chapter',
			'TestType',
			'TrainingType',
			'TrainingClass',
			'Score',
			'ProgramTimeline',
			'File',
			'Certificate',
			'Payment',
			'Permission',
		]
		var j = 0
		for (var i = 0; i < tables.length; i++) {
			await queryInterface.bulkInsert(
				'permissions',
				[
					{
						id: (j = j + 1),
						permission: 'c' + tables[i],
						created_at: '2021-01-01 00:00:00',
						updated_at: '2021-01-01 00:00:00',
					},
					{
						id: (j = j + 1),
						permission: 'r' + tables[i],
						created_at: '2021-01-01 00:00:00',
						updated_at: '2021-01-01 00:00:00',
					},
					{
						id: (j = j + 1),
						permission: 'u' + tables[i],
						created_at: '2021-01-01 00:00:00',
						updated_at: '2021-01-01 00:00:00',
					},
					{
						id: (j = j + 1),
						permission: 'd' + tables[i],
						created_at: '2021-01-01 00:00:00',
						updated_at: '2021-01-01 00:00:00',
					},
				],
				{}
			)
		}
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('permissions', null, {})
	},
}
