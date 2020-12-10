'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'roles',
			[
				{
					id: 1,
					peran: 'Admin',
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 2,
					peran: 'Peserta',
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 3,
					peran: 'Admin Penyeleksi',
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 4,
					peran: 'Admin Pembayaran',
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 5,
					peran: 'Pengajar',
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
			],
			{}
		)
	},

	// up: function (queryInterface, Sequelize) {
	// 	return Promise.all([
	// 	  models.role.create({
	// 		  id: 1,
	// 		  peran: 'Admin',
	// 		  permissions: [{
	// 			name: "name",
	// 			...
	// 		  }, {
	// 			name: 'another user',
	// 			...
	// 		  }]}, {
	// 		  include: [ models.permission]
	// 		}
	// 	  ),
	// 	  models.role.create({
	// 		data: 'another profile',
	// 		users: [{
	// 		  name: "more users",
	// 		  ...
	// 		}, {
	// 		  name: 'another user',
	// 		  ...
	// 		}]}, {
	// 		  include: [ model.users]
	// 		}
	// 	  )
	// 	])
	//   },

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('roles', null, {})
	},
}
