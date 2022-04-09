
describe('fizzbuzz',() => {
    it('changes numbers divisible by 3 into fizz', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
    }),
    it('changes numbers divisible by 5 into buzz', () => {
        expect(fizzBuzz(5)).toBe('Buzz')
    })
    it('changes numbers divisible by 3 & 5  into buzz', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })
    it('changes returns number not divisible by 3 or 5 as interger', () => {
        expect(fizzBuzz(2)).toBe(2)
    })
})

const fizzBuzz = require('./fizzBuzz');