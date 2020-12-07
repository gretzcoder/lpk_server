'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'chapters',
			[
				{
					id: 1,
					pertemuan_ke: '1',
					judul_chapter: 'judul bab pertama',
					deskripsi_chapter:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duarum enim vitarum nobis erunt instituta capienda. Tubulo putas dicere? Sint ista Graecorum; Duo Reges: constructio interrete. Apparet statim, quae sint officia, quae actiones. Pertama',
				},
				{
					id: 2,
					pertemuan_ke: '2',
					judul_chapter: 'judul bab kedua',
					deskripsi_chapter:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duarum enim vitarum nobis erunt instituta capienda. Tubulo putas dicere? Sint ista Graecorum; Duo Reges: constructio interrete. Apparet statim, quae sint officia, quae actiones. Kedua',
				},
				{
					id: 3,
					pertemuan_ke: '3',
					judul_chapter: 'judul bab ketiga',
					deskripsi_chapter:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duarum enim vitarum nobis erunt instituta capienda. Tubulo putas dicere? Sint ista Graecorum; Duo Reges: constructio interrete. Apparet statim, quae sint officia, quae actiones. Ketiga',
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('chapters', null, {})
	},
}
