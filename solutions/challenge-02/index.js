const decode = (encodedPhrase) => {
	let decodedPhrase = '';
	const encodedWords = encodedPhrase.split(' ')

	encodedWords.forEach((encodedWord, index) => {
		if (index > 0) decodedPhrase += ' '
		
		do {
			let	 letter = ''
			const lastTwo = encodedWord.substr(-2)
			const lastThree = encodedWord.substr(-3)
		
			if (lastTwo >= 96 && lastTwo <= 99) {
				letter = String.fromCharCode(lastTwo)
				encodedWord = encodedWord.substring(0, encodedWord.length - 2)
			} else {
				letter = String.fromCharCode(lastThree)
				encodedWord = encodedWord.substring(0, encodedWord.length - 3)
			}
		
			decodedPhrase += letter
		} while (encodedWord.length > 0)
	})

	const decodedWords = decodedPhrase
		.split(' ')
		.map(word => word.split('').reverse().join(''))
		.join(' ')

	const solution = `$ submit ${decodedWords}`
	console.log(solution)
	return solution;
}

decode('11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101')