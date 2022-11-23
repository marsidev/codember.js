// method without regex
export const isValidPassword = (password) => {
	const str = password.toString()
  if (!str.includes('55')) return false
	if (str.length !== 5) return false
	const digits = str.split('')
  const hasIncreasingOrder = digits.slice(1).every((item, i) => digits[i] <= item)

	return hasIncreasingOrder
}

// method with regex
export const isValidPassword2 = (password) => {
	if (!/^(?=.*55)(?=\d{5}$)1*2*3*4*5*6*7*8*9*0*$/.test(password)) return false
	return true
}

function main(isValid = isValidPassword) {
	const validPasswords = []
	for (let i = 11155; i <= 55999; i++) isValid(i) && validPasswords.push(i)

	console.log(`$ submit ${validPasswords.length}-${validPasswords[55]}`)
}

main()
