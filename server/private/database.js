import { Octokit, App } from 'octokit'
import { Buffer } from 'buffer'
import dotenv from 'dotenv'
import { get } from 'http'
dotenv.config()

const octokit = new Octokit({ auth: process.env.GithubToken })

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
setTimeout(saveTimer, saveInterval * 60 * 1000)

const dataBase = JSON.parse(await readFromGithub())

class DBInterface {
	/**
	 * @param {Object.<string, any>} obj
	 */
	constructor(obj) {
		this.obj = obj
	}
	getObjAtPath(path, createNew = false) {
		let o = this.obj
		for (let p of path) {
			if (!(p in o)) {
				if (createNew) o[p] = { key: p }
				else return {}
			}
			o = o[p]
		}
		return o
	}
	select(path) {
		return new DBInterface(this.getObjAtPath(path.split(':')))
	}
	where(condition) {
		return new DBInterface(
			Object.fromEntries(
				Object.entries(this.obj).filter(e => condition(e[1]))
			)
		)
	}
	insert(path, value) {
		let pa = path.split(':')
		let o = this.getObjAtPath(pa.slice(0, -1), true)
		o[pa.at(-1)] = {
			...value,
			key: pa.at(-1)
		}
		return this
	}
	update(path, value) {
		let pa = path.split(':')
		let o = this.getObjAtPath(pa.slice(0, -1), true)
		o[pa.at(-1)] = {
			...o[pa.at(-1)],
			...value,
			key: pa.at(-1)
		}
		return this
	}
	delete(key) {
		delete this.obj[key]
		return this
	}
	expand() {
		let obj = { ...this.obj }
		for (let key in obj) {
			if (typeof obj[key] === 'string' && obj[key].startsWith(':')) {
				let o = new DBInterface(dataBase).select(
					this.obj[key].substring(1)
				)?.obj
				if (o) obj[key] = o
			}
		}
		return new DBInterface(obj)
	}
	has(path) {
		return Object.keys(this.select(path).end()).length > 0
	}
	end() {
		return this.obj
	}
}

export const DB = new DBInterface(dataBase)
