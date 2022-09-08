import { Octokit, App } from 'octokit'
import { Buffer } from 'buffer'
import dotenv from 'dotenv'
dotenv.config()

const octokit = new Octokit({ auth: process.env.GithubToken})

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
	const val = await octokit.rest.repos.getContent(GithubConfig)
	return Buffer.from(val.data.content, 'base64').toString('utf8')
}

export const dataBase = JSON.parse(await readFromGithub())

export function read(path) {
	let d = dataBase
	for (let p in path.split('.')) {
		if (!(p in d)) return null
		d = d[p]
	}
	return d
}

export function write(path, value) {
	let d = dataBase
	let sp = path.split('.')
	for (let p of sp.slice(0, -1)) {
		if (!(p in d)) d[p] = {}
		d = d[p]
	}
	d[sp.at(-1)] = value
}

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
