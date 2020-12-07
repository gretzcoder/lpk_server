import DataTypes from 'sequelize'

module.exports = (sequelize) => {
	return sequelize.define(
		'profile',
		{
			accountId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				unique: {
					args: true,
					msg: '|profiles_accountId|unique',
				},
				validate: {
					notNull: {
						args: true,
						msg: `|profiles_accountId|notNull`,
					},
				},
			},
			namaLengkap: {
				type: DataTypes.STRING,
			},
			alamat: {
				type: DataTypes.TEXT,
			},
			noTelepon: {
				type: DataTypes.STRING(14),
			},
			jenisKelamin: {
				type: DataTypes.ENUM('m', 'f'),
			},
			tanggalLahir: {
				type: DataTypes.DATE,
			},
			pendidikanTerakhir: {
				type: DataTypes.STRING,
			},
			jurusan: {
				type: DataTypes.STRING,
			},
			foto: {
				type: DataTypes.STRING,
			},
		},
		{ underscored: true }
	)
}
