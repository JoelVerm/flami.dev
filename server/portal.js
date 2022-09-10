import { isLoggedIn } from './private/users.js'

/**
 * @param {import('../main.js').RunningRequest} req
 */
export async function flami(req) {
	if (!isLoggedIn(req.ip, await req.getCookie('login-code'))) {
		req.redirect('/login')
		return
	}
}
