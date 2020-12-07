'use strict'

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'program_timelines',
			[
				{
					id: 1,
					program_id: 1,
					stage_id: 1,
					dimulai: '2021-01-01 00:00:00',
					berakhir: '2021-01-06 00:00:00',
					pengumuman: '2021-01-07',
					pesan_lolos: 'selamat registrasi',
					pesan_gagal: 'maaf registrasi',
				},
				{
					id: 2,
					program_id: 1,
					stage_id: 2,
					dimulai: '2021-02-08 00:00:00',
					berakhir: '2021-02-13 00:00:00',
					pengumuman: '2021-02-14',
					pesan_lolos: 'selamat wawancara dan test',
					pesan_gagal: 'maaf wawancara dan test',
				},
				{
					id: 3,
					program_id: 1,
					stage_id: 3,
					dimulai: '2021-03-15 00:00:00',
					berakhir: '2021-03-20 00:00:00',
					pengumuman: '2021-03-21',
					pesan_lolos: 'selamat registrasi ulang',
					pesan_gagal: 'maaf registrasi ulang',
				},
				{
					id: 4,
					program_id: 1,
					stage_id: 4,
					dimulai: '2021-04-22 00:00:00',
					berakhir: '2021-04-25 00:00:00',
					pengumuman: '2021-04-26',
					pesan_lolos: 'selamat pembiayaan',
					pesan_gagal: 'maaf pembiayaan',
				},
				{
					id: 5,
					program_id: 1,
					stage_id: 5,
					dimulai: '2021-05-27 00:00:00',
					berakhir: '2021-05-27 00:00:00',
					pengumuman: '2021-05-27',
					pesan_lolos: 'selamat sosialisasi',
					pesan_gagal: 'maaf sosialisasi',
				},
				{
					id: 6,
					program_id: 1,
					stage_id: 6,
					dimulai: '2021-06-28 00:00:00',
					berakhir: '2021-06-28 00:00:00',
					pengumuman: '2021-06-28',
					pesan_lolos: 'selamat pelatihan',
					pesan_gagal: 'maaf pelatihan',
				},
				{
					id: 7,
					program_id: 1,
					stage_id: 7,
					dimulai: '2021-07-29 00:00:00',
					berakhir: '2021-07-29 00:00:00',
					pengumuman: '2021-07-29',
					pesan_lolos: 'selamat final test',
					pesan_gagal: 'maaf final test',
				},
				{
					id: 8,
					program_id: 1,
					stage_id: 8,
					dimulai: '2021-08-30 00:00:00',
					berakhir: '2021-08-30 00:00:00',
					pengumuman: '2021-08-30',
					pesan_lolos: 'selamat interview with company',
					pesan_gagal: 'maaf interview with company',
				},
				{
					id: 9,
					program_id: 1,
					stage_id: 9,
					dimulai: '2021-09-31 00:00:00',
					berakhir: '2021-09-31 00:00:00',
					pengumuman: '2021-09-31',
					pesan_lolos: 'selamat pemberangkatan',
					pesan_gagal: 'maaf pemberangkatan',
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('program_timelines', null, {})
	},
}
