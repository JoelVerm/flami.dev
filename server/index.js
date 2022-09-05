/**
 * @param {import('../main.js').RunningRequest} req 
 */
export async function flami(req) {
    req.getPostData()
    return {
        foo: 12345
    }
}
