import { models } from '../../db/index.js'
import { filterLoop, getUserData, getPermission } from '../tools'

import { createWriteStream, unlink } from 'fs'
import path from 'path'

export async function getAll(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'rProfile')

	let filters = {}
	let orderBy = []

	if (args.filters != null) {
		filters = filterLoop(args.filters)
	}
	if (parentValue != null) {
		Object.assign(filters, parentValue)
	}
	if (args.orderBy != null) {
		orderBy = Object.entries(args.orderBy)
	}
	return await models.profile.findAll({
		where: filters,
		offset: args.offset,
		limit: args.limit,
		order: orderBy,
	})
}

export async function getById(parentValue, { ...args }, context) {
	if (parentValue != null) {
		return await models.profile.findOne({ where: parentValue })
	}

	const userData = getUserData(context)

	return await models.profile.findOne({ where: { accountId: userData.id } })
}

export async function update(parentValue, { ...args }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'uProfile')

	const id = args.id
	delete args.id

	const { foto } = await models.profile.findOne({
		where: { id: id },
		attributes: ['foto'],
	})

	//image upload
	if (args.foto != null) {
		const { createReadStream, mimetype } = await args.foto
		const ext = mimetype.split('/')

		if (ext[0] != 'image') {
			throw new Error('must be image')
		}

		args.foto = path.join(
			__dirname,
			'../../files/fotoProfile/',
			`${id}.${ext[1]}`
		)
		await models.profile.update(args, { where: { id: id } })

		if (
			foto != null ||
			foto != path.join(__dirname, '../../files/fotoProfile/default.png')
		) {
			unlink(foto, () => {})
		}

		await createReadStream().pipe(
			createWriteStream(
				path.join(__dirname, '../../files/fotoProfile/', `${id}.${ext[1]}`)
			)
		)
	} else {
		await models.profile.update(args, { where: { id: id } })
	}

	return await models.profile.findOne({ where: { id: id } })
}

export async function selfUpdate(parentValue, { ...args }, context) {
	const userData = getUserData(context)

	const { foto, id } = await models.profile.findOne({
		where: { accountId: userData.id },
		attributes: ['foto', 'id'],
	})

	//image upload
	if (args.foto != null) {
		const { createReadStream, mimetype } = await args.foto
		const ext = mimetype.split('/')

		if (ext[0] != 'image') {
			throw new Error('must be image')
		}

		args.foto = path.join(
			__dirname,
			'../../files/fotoProfile/',
			`${id}.${ext[1]}`
		)
		await models.profile.update(args, { where: { id: id } })

		if (
			foto != null ||
			foto != path.join(__dirname, '../../files/fotoProfile/default.png')
		) {
			unlink(foto, () => {})
		}

		await createReadStream().pipe(
			createWriteStream(
				path.join(__dirname, '../../files/fotoProfile/', `${id}.${ext[1]}`)
			)
		)
	} else {
		await models.profile.update(args, { where: { id: id } })
	}

	return await models.profile.findOne({ where: { id: id } })
}

export async function remove(parentValue, { id }, context) {
	const userData = getUserData(context)
	await getPermission(userData, 'dProfile')

	const deleted = await models.profile.findOne({ where: { id: id } })
	models.profile.destroy({ where: { id } })
	return deleted
}
