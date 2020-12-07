'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const tables = [
			'role',
			'account',
			'profile',
			'program',
			'stage',
			'participant',
			'chapter',
			'testType',
			'trainingClass',
			'score',
			'programTimeline',
			'file',
			'certificate',
			'payment',
			'permission',
		]

		const roles = ['admin', 'peserta', 'penyeleksi', 'pembayaran', 'pengajar']

		await queryInterface.bulkInsert(
			'permission_roles',
			[
				{
					role_id: 2,
					permission_id: 14,
				},
			],
			{}
		)

		var j = 0
		for (var i = 0; i < tables.length; i++) {
			await queryInterface.bulkInsert(
				'permission_roles',
				[
					{
						role_id: 1,
						permission_id: (j = j + 1),
					},
					{
						role_id: 1,
						permission_id: (j = j + 1),
					},
					{
						role_id: 1,
						permission_id: (j = j + 1),
					},
					{
						role_id: 1,
						permission_id: (j = j + 1),
					},
				],
				{}
			)
		}
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('permission_roles', null, {})
	},
}
