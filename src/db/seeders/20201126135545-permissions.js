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
					},
					{
						id: (j = j + 1),
						permission: 'r' + tables[i],
					},
					{
						id: (j = j + 1),
						permission: 'u' + tables[i],
					},
					{
						id: (j = j + 1),
						permission: 'd' + tables[i],
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
