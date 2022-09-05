/**
 * @param {import('../main.js').RunningRequest} req 
 */
export async function flami(req) {
    let data = await req.getPostData()
    if ('login-name' in data) {
        let name = data['login-name']
        let password = data['login-password']
    }
    return {
        foo: 12345
    }
}
