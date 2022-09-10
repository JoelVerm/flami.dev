import { register, login } from './private/users.js'

/**
 * @param {import('../main.js').RunningRequest} req
 */
export async function flami(req) {
	let data = await req.getPostData()
	if ('register-name' in data) {
		let name = data['register-name']
		let email = data['register-email']
		let password = data['register-password']
		let password_confirm = data['register-password-confirm']
		if (password != password_confirm) {
			return {
				registerStatus: 'invalidPwd'
			}
		}
		if (!(await register(name, email, password))) {
			return {
				registerStatus: 'invalidName'
			}
		}
		let code = await login(name, password, req.ip)
		req.setCookie('login-code', code)
		req.redirect('/portal')
	}
}

//https://jasonwatmore.com/post/2020/07/20/nodejs-hash-and-verify-passwords-with-bcrypt
