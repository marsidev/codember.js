import { readFile } from "node:fs/promises"

const rawColors = await readFile('colors.txt', 'utf8')
const rawColorsDobledQuoted = rawColors.replaceAll("'", "\"")

const colors = JSON.parse(rawColorsDobledQuoted)
let maxPatternLength = 0
let indexes = [-1, -1]

for (let i = 0; i < colors.length; i++) {
	let counter = 2
	
	for (let j = i + 2; j < colors.length; j = j + 2) {		
		if (colors[j] === colors[i]) {
			counter++

			if (counter > maxPatternLength) {
				maxPatternLength = counter
				indexes[1] = j
			}
		} else break

		if (colors[j + 1] === colors[i + 1]) {
			counter++

			if (counter > maxPatternLength) {
				maxPatternLength = counter
				indexes[1] = j + 1
			}
		} else break
	}
}

console.log(`${maxPatternLength}@${colors[indexes[1]]}`)