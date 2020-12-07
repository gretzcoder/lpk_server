import DataTypes from 'sequelize'

module.exports = (sequelize) => {
	return sequelize.define(
		'chapter',
		{
			pertemuanKe: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|chapters_pertemuanKe|notNull`,
					},
				},
			},
			judulChapter: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|chapters_judulChapter|notNull`,
					},
				},
			},
			deskripsiChapter: {
				type: DataTypes.TEXT,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|chapters_deskripsiChapter|notNull`,
					},
				},
			},
		},
		{ underscored: true }
	)
}
