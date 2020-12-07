import DataTypes from 'sequelize'

module.exports = (sequelize) => {
	return sequelize.define(
		'file',
		{
			participantId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|files_participantId|notNull`,
					},
				},
			},
			selectionBy: {
				type: DataTypes.INTEGER,
			},
			cv: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|files_cv|notNull`,
					},
				},
			},
			ktp: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|files_ktp|notNull`,
					},
				},
			},
			pasPhoto: {
				type: DataTypes.STRING,
				// allowNull: false,
				// validate: {
				// 	notNull: {
				// 		args: true,
				// 		msg: `|files_pasPhoto|notNull`,
				// 	},
				// },
			},
			ijazah: {
				type: DataTypes.STRING,
				// allowNull: false,
				// validate: {
				// 	notNull: {
				// 		args: true,
				// 		msg: `|files_ojazah|notNull`,
				// 	},
				// },
			},
			transkripNilai: {
				type: DataTypes.STRING,
				// allowNull: false,
				// validate: {
				// 	notNull: {
				// 		args: true,
				// 		msg: `|files_transkripNilai|notNull`,
				// 	},
				// },
			},
			skck: {
				type: DataTypes.STRING,
				// allowNull: false,
				// validate: {
				// 	notNull: {
				// 		args: true,
				// 		msg: `|files_skck|notNull`,
				// 	},
				// },
			},
			suratKesehatan: {
				type: DataTypes.STRING,
				// allowNull: false,
				// validate: {
				// 	notNull: {
				// 		args: true,
				// 		msg: `|files_suratKesehatan|notNull`,
				// 	},
				// },
			},
			suratPersetujuanOrangtua: {
				type: DataTypes.STRING,
				// allowNull: false,
				// validate: {
				// 	notNull: {
				// 		args: true,
				// 		msg: `|files_suratPersetujuanOrangtua|notNull`,
				// 	},
				// },
			},
		},
		{ underscored: true }
	)
}
