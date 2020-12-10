import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { models } from '../../db'

export async function signUpResolver(parentValue, { ...args }) {
	const lastRecord = await models.account.create(args)

	await models.profile.create({
		accountId: lastRecord.id,
		foto: path.join(__dirname, '../../files/fotoProfile/default.png'),
	})

	const token = jwt.sign({ account }, 'Sup3rDup3rR4h4514', { expiresIn: '24h' })
	return {
		lastRecord,
		token,
	}
}

export async function loginResolver(parentValue, { ...args }) {
	const account = await models.account.findOne({
		where: { email: args.email },
	})

	if (!account) {
		throw new Error('user tidak ada di Database')
	} else if (!bcrypt.compareSync(args.password, account.password)) {
		throw new Error('Password tidak sesuai')
	} else {
		const token = jwt.sign({ account }, 'Sup3rDup3rR4h4514', {
			expiresIn: '24h',
		})
		return {
			account,
			token,
		}
	}
}
