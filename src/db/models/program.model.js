import DataTypes from 'sequelize'

module.exports = (sequelize) => {
	return sequelize.define(
		'program',
		{
			namaProgram: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|programs_namaProgram|notNull`,
					},
				},
			},
			deskripsiProgram: {
				type: DataTypes.TEXT,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|programs_deskripsiProgram|notNull`,
					},
				},
			},
			biayaProgram: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|programs_biayaProgram|notNull`,
					},
				},
			},
			fotoProgram: {
				type: DataTypes.STRING,
			},
			createdBy: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|programs_createdBy|notNull`,
					},
				},
			},
			lastUpdatedBy: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|programs_lastUpdatedBy|notNull`,
					},
				},
			},
		},
		{ underscored: true }
	)
}
