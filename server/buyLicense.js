import dotenv from 'dotenv'
dotenv.config()
import Stripe from 'stripe'
const stripe = new Stripe(process.env.StripeSecretKey)
import { startSession } from './private/licenses.js'

/**
 * @param {import('../main.js').RunningRequest} req
 */
export async function flami(req) {
	let data = await req.getPostData()
	const oneDay = 24 * 60 * 60 * 1000
	const firstDate = new Date('01 08 2022')
	const secondDate = new Date('01 05 2022')
	const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay))
	const price = await stripe.prices.create({
		unit_amount: 100 * (diffDays / 365),
		currency: 'eur',
		product: 'prod_MIBAv0C13G8suZ'
	})
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price_data: price,
				quantity: data.amount
			}
		],
		mode: 'payment',
		success_url: `${process.env.Domain}/buyLicenseSuccess`,
		cancel_url: `${process.env.Domain}/buyLicenseCancel`
	})
	startSession(session.id, data.amount, data.key)

	req.redirect(session.url)
}
