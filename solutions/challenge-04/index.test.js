import { describe, it, expect } from 'vitest'
import { isValidPassword, isValidPassword2 } from '.'

describe('isValidPassword', () => {
	it('works as expected', () => {
		expect(isValidPassword(55678)).toBe(true)
		expect(isValidPassword(12555)).toBe(true)
		expect(isValidPassword(55555)).toBe(true)
		expect(isValidPassword(5567)).toBe(false)
		expect(isValidPassword(556789)).toBe(false)
		expect(isValidPassword(12345)).toBe(false)
		expect(isValidPassword(57775)).toBe(false)
		expect(isValidPassword(55432)).toBe(false)
		expect(isValidPassword('abc55')).toBe(false)
	})
})

describe('isValidPassword2', () => {
	it('works as expected', () => {
		expect(isValidPassword2(55678)).toBe(true)
		expect(isValidPassword2(12555)).toBe(true)
		expect(isValidPassword2(55555)).toBe(true)
		expect(isValidPassword2(5567)).toBe(false)
		expect(isValidPassword2(556789)).toBe(false)
		expect(isValidPassword2(12345)).toBe(false)
		expect(isValidPassword2(57775)).toBe(false)
		expect(isValidPassword2(55432)).toBe(false)
		expect(isValidPassword('abc55')).toBe(false)
	})
})