import dotenv from 'dotenv'
dotenv.config()
import Stripe from 'stripe'
const stripe = new Stripe(process.env.StripeSecretKey)
import { paySession } from './private/licenses.js'

/**
 * @param {import('../main.js').RunningRequest} req
 */
export async function flami(req) {
	let data = await req.getPostData()
	const sig = req.req.headers['stripe-signature']

	let event
	try {
		event = stripe.webhooks.constructEvent(
			data,
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
