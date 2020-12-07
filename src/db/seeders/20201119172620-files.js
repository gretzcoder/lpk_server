'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'files',
			[
				{
					id: 1,
					participant_id: 1,
					selection_by: 3,
					cv: 'cv 1',
					ktp: 'ktp 1',
					pas_photo: 'pas_photo 1',
					ijazah: 'ijazah 1',
					transkrip_nilai: 'transkrip nilai 1',
					skck: 'skck 1',
					surat_kesehatan: 'surat kesehatan 1',
					surat_persetujuan_orangtua: 'surat persetujuan orang tua 1',
				},
				{
					id: 2,
					participant_id: 2,
					selection_by: 3,
					cv: 'cv 2',
					ktp: 'ktp 2',
					pas_photo: 'pas_photo 2',
					ijazah: 'ijazah 2',
					transkrip_nilai: 'transkrip nilai 2',
					skck: 'skck 2',
					surat_kesehatan: 'surat kesehatan 2',
					surat_persetujuan_orangtua: 'surat persetujuan orang tua 2',
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('files', null, {})
	},
}
