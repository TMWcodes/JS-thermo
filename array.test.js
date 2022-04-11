// describe('add to batch', () => {
//     it('adds to an array', () => {
//         expect(addItem(3)).toEqual([1,3,3])
//     })
// });

describe('generate message', () => {
    it('returns message for each name', () => {
        expect(generateMessagesFun(['Tyrone'])).toStrictEqual(['Hi Tyrone! 50% off our best candies for you today!'])
    })
});

const addItem = require('./array');
const generateMessagesFun = require('./array');
