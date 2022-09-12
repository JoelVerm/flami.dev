import bcrypt from 'bcrypt'
import crypto from 'crypto'
import { DB } from './database.js'

const loggedInIps = {}

export async function register(name, email, password) {
	const hash = await bcrypt.hash(password, 10)
	if (DB.has(`accounts:${name}`)) return false
	DB.insert(`accounts.${name}`, {
		name,
		email,
		password: hash
	})
}

export async function login(name, password, ip) {
	if (
		await bcrypt.compare(
			password,
			DB.select(`accounts:${name}:password`).end() ?? ''
		)
	) {
		loggedInIps[ip] = crypto.randomBytes(32).toString('base64')
		return loggedInIps[ip]
	}
	return false
}

export function isLoggedIn(ip, code) {
	return ip in loggedInIps && loggedInIps[ip] == code
}
