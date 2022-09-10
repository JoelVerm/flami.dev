import crypto from 'crypto'
import { dataBase, write } from './database.js'

/*
 * https://stripe.com/docs/payments/checkout/fulfill-orders
 * https://stripe.com/docs/checkout/quickstart
 */

const sessions = {}
export function startSession(id, username, amount, key = null) {
	sessions[id] = { id, username, amount, key }
}
export function paySession(id) {
	if (!sessions[id]) return false
	if (sessions[id].key === null)
		register(sessions[id].username, sessions[id].amount)
	else refresh(sessions[id].key, sessions[id].amount)
}

export function register(username, numDevices) {
	const key = crypto.randomBytes(32).toString('base64')
	write(`licenses.${key}`, {
		key,
		username,
		date: Date.now(),
		numDevices,
		devices: []
	})
}

export function refresh(key, amount) {
	dataBase.licenses[key].date = Date.now()
	dataBase.licenses[key].devices = []
	dataBase.licenses[key].amount = amount
}

export function isValid(key, deviceCode) {
	const license = dataBase?.licenses?.[key]
	const testDate = new Date()
	if (testDate.getMonth() > 7)
		testDate.setFullYear(testDate.getFullYear() + 1)
	testDate.setMonth(7)
	if (
		!(deviceCode in license.devices) &&
		license.devices.length < license.numDevices
	)
		license.devices.push(deviceCode)
	return license.date < testDate && deviceCode in license.devices
}
