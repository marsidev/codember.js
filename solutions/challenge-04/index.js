// method with regex
export const isValidPassword = (password) => {
	const has5Digits = /^\d{5}$/.test(password)
	const includes55 = /55/.test(password)
	const hasIncreasingOrder = /^0*1*2*3*4*5*6*7*8*9*$/.test(password)
	return has5Digits && includes55 && hasIncreasingOrder
}

// method without regex
export const isValidPassword2 = (password) => {
	const isNumber = typeof password === 'number'
	const has5Digits = password.toString().length === 5
	const includes55 = password.toString().includes('55')
	const digitsArray = password.toString().split('').map(v => Number(v))
	const hasIncreasingOrder = digitsArray.slice(1).every((item, i) => digitsArray[i] <= item)
	
	return isNumber && has5Digits && includes55 && hasIncreasingOrder
}

function main() {
	const validPasswords = []
	for (let i = 11098; i < 98123; i++) if (isValidPassword(i)) validPasswords.push(i)

	console.log(`$ submit ${validPasswords.length}-${validPasswords[55]}`)
}

main()