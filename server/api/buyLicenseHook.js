import dotenv from 'dotenv'
dotenv.config()
import Stripe from 'stripe'
const stripe = new Stripe(process.env.StripeSecretKey)
import { paySession } from '../private/licenses.js'

/**
 * @param {import('../../main.js').RunningRequest} req
 */
export async function flami(req) {
	let data = Object.entries(await req.getPostData())
	let payload = data[0][0] + (data[0][1] ? ':' + data[0][1] : '')
	const sig = req.req.headers['stripe-signature']

	let event
	try {
		event = stripe.webhooks.constructEvent(
			payload,
			sig,
			process.env.StripeEndpointSecret
		)
	} catch (err) {
		return req.redirect('/')
	}

	if (event.type === 'checkout.session.completed') {
		const session = event.data.object

		paySession(session.id)
	}
}
