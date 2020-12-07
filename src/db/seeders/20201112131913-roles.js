'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'roles',
			[
				{
					id: 1,
					peran: 'Admin',
				},
				{
					id: 2,
					peran: 'Peserta',
				},
				{
					id: 3,
					peran: 'Admin Penyeleksi',
				},
				{
					id: 4,
					peran: 'Admin Pembayaran',
				},
				{
					id: 5,
					peran: 'Pengajar',
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
