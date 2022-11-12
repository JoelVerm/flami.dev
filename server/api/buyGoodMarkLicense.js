import dotenv from 'dotenv'
dotenv.config()
import Stripe from 'stripe'
const stripe = new Stripe(process.env.StripeSecretKey)
import { startSession } from '../private/licenses.js'
import { isLoggedIn } from '../private/users.js'

/**
 * @param {import('../main.js').RunningRequest} req
 */
export async function flami(req) {
	let username = isLoggedIn(req.ip, await req.getCookie('login-code'))
	if (!username) {
		req.redirect('/login')
		return
	}
	let data = await req.getPostData()
	data.amount = Number(data.amount)
	if (isNaN(data.amount)) {
		req.redirect('/portal')
		return
	}
	const oneDay = 24 * 60 * 60 * 1000
	const firstDate = new Date()
	firstDate.setDate(1)
	firstDate.setFullYear(
		firstDate.getFullYear() + (firstDate.getMonth() >= 8 ? 1 : 0)
	)
	firstDate.setMonth(8)
	const secondDate = new Date()
	const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay))
	const price = Math.ceil(100 * (diffDays / 365))
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price_data: {
					unit_amount: price,
					currency: 'eur',
					//product: 'prod_MIBAv0C13G8suZ'
					product: 'prod_MQTLaEEZvY1elQ'
				},
				quantity: data.amount
			}
		],
		mode: 'payment',
		success_url: `${process.env.Domain}/buyLicenseSuccess`,
		cancel_url: `${process.env.Domain}/buyLicenseCancel`
	})
	startSession(session.id, username, data.amount)

	req.redirect(session.url)
}
