import DataTypes from 'sequelize'

module.exports = (sequelize) => {
	return sequelize.define(
		'programTimeline',
		{
			programId: {
				type: DataTypes.INTEGER,
				unique: 'actions_unique',
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|programTimelines_programId|notNull`,
					},
				},
			},
			stageId: {
				type: DataTypes.INTEGER,
				unique: 'actions_unique',
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|programTimelines_stageId|notNull`,
					},
				},
			},
			dimulai: {
				type: DataTypes.DATE,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|programTimelines_dimulai|notNull`,
					},
				},
			},
			berakhir: {
				type: DataTypes.DATE,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|programTimelines_berakhir|notNull`,
					},
				},
			},
			pengumuman: {
				type: DataTypes.DATE,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|programTimelines_pengumuman|notNull`,
					},
				},
			},
			pesanLolos: {
				type: DataTypes.TEXT,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|programTimelines_pesanLolos|notNull`,
					},
				},
			},
			pesanGagal: {
				type: DataTypes.TEXT,
				allowNull: false,
				validate: {
					notNull: {
						args: true,
						msg: `|programTimelines_pesanGagal|notNull`,
					},
				},
			},
		},
		{ underscored: true },
		{
			uniqueKeys: {
				actions_unique: {
					fields: ['programId', 'stageId'],
				},
			},
		}
	)
}
