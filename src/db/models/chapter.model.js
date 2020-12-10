import DataTypes from 'sequelize'

module.exports = (sequelize) => {
	return sequelize.define(
		'chapter',
		{
			trainingTypeId: {
				type: DataTypes.INTEGER,
				unique: 'actions_unique',
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|trainingClasses_TrainingTypeId|notNull`,
					},
				},
			},
			pertemuanKe: {
				type: DataTypes.STRING,
				unique: 'actions_unique',
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
		{ underscored: true },
		{
			uniqueKeys: {
				actions_unique: {
					fields: ['pertemuanKe', 'trainingTypeId'],
				},
			},
		}
	)
}
