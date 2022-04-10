// const { it, expect } = require("@jest/globals")


describe('plus', () => {
    //test case
    it('adds number together', () => {
        expect(plus(2,2)).toBe(4)
    })
})

//function name file name

const plus = require('./add');