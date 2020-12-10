'use strict'

const path = require('path')

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'profiles',
			[
				{
					id: 1,
					account_id: 1,
					nama_lengkap: 'Admin',
					alamat: 'alamatAdmin',
					no_telepon: 'noTeleponAdmin',
					jenis_kelamin: 'm',
					tanggal_lahir: '1999-01-08 00:00:00',
					pendidikan_terakhir: 'pendidikanTerakhirAdmin',
					jurusan: 'jurusanAdmin',
					foto: path.join(__dirname, '../../files/images/profiles/default.png'),
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 2,
					account_id: 2,
					nama_lengkap: 'Pengajar',
					alamat: 'alamatPengajar',
					no_telepon: 'noTeleponPengajar',
					jenis_kelamin: 'f',
					tanggal_lahir: '1999-01-08 00:00:00',
					pendidikan_terakhir: 'pendidikanTerakhirPengajar',
					jurusan: 'jurusanPengajar',
					foto: path.join(__dirname, '../../files/images/profiles/default.png'),
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 3,
					account_id: 3,
					nama_lengkap: 'Penyeleksi',
					alamat: 'alamatPenyeleksi',
					no_telepon: 'noTeleponPenyeleksi',
					jenis_kelamin: 'm',
					tanggal_lahir: '1999-01-08 00:00:00',
					pendidikan_terakhir: 'pendidikanTerakhirPenyeleksi',
					jurusan: 'jurusanPenyeleksi',
					foto: path.join(__dirname, '../../files/images/profiles/default.png'),
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 4,
					account_id: 4,
					nama_lengkap: 'AdminPembayaran',
					alamat: 'alamatAdminPembayaran',
					no_telepon: 'noTeleponAdminPembayaran',
					jenis_kelamin: 'm',
					tanggal_lahir: '1999-01-08 00:00:00',
					pendidikan_terakhir: 'pendidikanTerakhirAdminPembayaran',
					jurusan: 'jurusanAdminPembayaran',
					foto: path.join(__dirname, '../../files/images/profiles/default.png'),
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 5,
					account_id: 5,
					nama_lengkap: 'Peserta1',
					alamat: 'alamatPeserta1',
					no_telepon: 'noTeleponPeserta1',
					jenis_kelamin: 'f',
					tanggal_lahir: '1999-01-08 00:00:00',
					pendidikan_terakhir: 'pendidikanTerakhirPeserta1',
					jurusan: 'jurusanPeserta1',
					foto: path.join(__dirname, '../../files/images/profiles/default.png'),
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
				{
					id: 6,
					account_id: 6,
					nama_lengkap: 'Peserta2',
					alamat: 'alamatPeserta2',
					no_telepon: 'noTeleponPeserta2',
					jenis_kelamin: 'm',
					tanggal_lahir: '1999-01-08 00:00:00',
					pendidikan_terakhir: 'pendidikanTerakhirPeserta2',
					jurusan: 'jurusanPeserta2',
					foto: path.join(__dirname, '../../files/images/profiles/default.png'),
					created_at: '2021-01-01 00:00:00',
					updated_at: '2021-01-01 00:00:00',
				},
			],
			{}
		)
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('profiles', null, {})
	},
}
