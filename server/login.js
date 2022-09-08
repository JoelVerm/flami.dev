import { login } from './private/users.js'

/**
 * @param {import('../main.js').RunningRequest} req
 */
export async function flami(req) {
    let data = await req.getPostData()
    if ('login-name' in data) {
        let name = data['login-name']
        let password = data['login-password']
        let code = await login(name, password, req.ip)
        if (code === false) {
            return {
                loginStatus: 'failed'
            }
        }
        req.setCookie('login-code', code)
        req.redirect('/portal')
    }
}
