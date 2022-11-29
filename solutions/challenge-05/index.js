import mecenas from "./mecenas.js";

let result = mecenas
	.map((mecena, index) => {
		return {
			index,
			name: mecena
		}
	})

let hasAlives = true

while (hasAlives) {
	for (let i = 0; i < result.length; i++) {
		if (i	 % 2 !== 0) result[i] = null
	}

	if (Boolean(result.at(-1)) && Boolean(result.at(0))) {
		result[0] = null
	}

	// remove nulls
	result = result.filter(r => Boolean(r))
	hasAlives = result.length > 1
}

console.log(`$ submit ${result.at(0).name}-${result.at(0).index}`)