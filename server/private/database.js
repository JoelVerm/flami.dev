import { Octokit, App } from 'octokit'

const token = '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'
const octokit = new Octokit({ auth: token })

const GithubConfig = {
	owner: 'JoelVerm',
	repo: 'flami.dev-data',
	path: 'data.json'
}
const GithubWriteConfig = {
	...GithubConfig,
	committer: {
		name: 'Joël Vermeulen',
		email: '98051242+JoelVerm@users.noreply.github.com'
	},
	author: {
		name: 'Joël Vermeulen',
		email: '98051242+JoelVerm@users.noreply.github.com'
	}
}
async function writeToGithub(content) {
	await octokit.rest.repos.createOrUpdateFileContents({
		message: `Commit ${Date()}`,
		content,
		...GithubWriteConfig
	})
}
async function readFromGithub() {
	return octokit.rest.repos.getContent(GithubConfig)
}

export const dataBase = JSON.parse(await readFromGithub())

const saveInterval = 15
async function saveTimer() {
	await writeToGithub(JSON.stringify(dataBase))
    let date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes()
	let m = Math.ceil(minute / saveInterval) * saveInterval
	let millis = new Date(year, month, day, hour, m).getMilliseconds()
	setTimeout(saveTimer, millis)
}
setTimeout(saveTimer, saveInterval*60*1000)
