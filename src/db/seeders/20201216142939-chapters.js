'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'chapters',
			[
				{
					id: 1,
					training_type_id: 1,
					pertemuan_ke: '1',
					judul_chapter: 'judul bab pertama',
					deskripsi_chapter:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duarum enim vitarum nobis erunt instituta capienda. Tubulo putas dicere? Sint ista Graecorum; Duo Reges: constructio interrete. Apparet statim, quae sint officia, quae actiones. Pertama',
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 2,
					training_type_id: 1,
					pertemuan_ke: '2',
					judul_chapter: 'judul bab kedua',
					deskripsi_chapter:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duarum enim vitarum nobis erunt instituta capienda. Tubulo putas dicere? Sint ista Graecorum; Duo Reges: constructio interrete. Apparet statim, quae sint officia, quae actiones. Kedua',
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 3,
					training_type_id: 1,
					pertemuan_ke: '3',
					judul_chapter: 'judul bab ketiga',
					deskripsi_chapter:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duarum enim vitarum nobis erunt instituta capienda. Tubulo putas dicere? Sint ista Graecorum; Duo Reges: constructio interrete. Apparet statim, quae sint officia, quae actiones. Ketiga',
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('chapters', null, {})
	},
}
