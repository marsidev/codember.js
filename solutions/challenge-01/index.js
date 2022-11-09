import { readFile } from "node:fs/promises"

const requiredKeys = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']
const plainText = await readFile('users.txt', 'utf8')
const usersData = plainText.split('\n\n')
const usersDataFormatted = usersData.map(u => u.split('\n').join(' '))

const usersDataJson = usersDataFormatted.map(u => {
	const kvs = u.split(' ')
	const json = {}
	kvs.forEach(kvStr => {
		const kvArr = kvStr.split(':')
		const key = kvArr[0]
		const value = kvArr[1]
		json[key] = value
	})
	
	return json
})

const validUsers = usersDataJson.filter(userData => {
	const userKeys = Object.keys(userData)
	if (userKeys.length < 6) return false
	if (!requiredKeys.every(required => userKeys.includes(required))) return false
	return true
})

console.log(`$ submit ${validUsers.length}${validUsers.at(-1).usr}`)
