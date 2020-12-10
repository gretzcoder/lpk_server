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
			'trainingType',
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
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					role_id: 2,
					permission_id: 18,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					role_id: 2,
					permission_id: 26,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					role_id: 2,
					permission_id: 30,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					role_id: 2,
					permission_id: 34,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					role_id: 2,
					permission_id: 46,
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
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
						created_at: '2021-01-01 00:00:00',
						updated_at: '2021-01-01 00:00:00',
					},
					{
						role_id: 1,
						permission_id: (j = j + 1),
						created_at: '2021-01-01 00:00:00',
						updated_at: '2021-01-01 00:00:00',
					},
					{
						role_id: 1,
						permission_id: (j = j + 1),
						created_at: '2021-01-01 00:00:00',
						updated_at: '2021-01-01 00:00:00',
					},
					{
						role_id: 1,
						permission_id: (j = j + 1),
						created_at: '2021-01-01 00:00:00',
						updated_at: '2021-01-01 00:00:00',
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
