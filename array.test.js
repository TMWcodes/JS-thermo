describe('arrays', () => {
    it('can be added to', () => {
        expect(addItem(3)).toEqual([1,3,3])
    });
});

describe('offer', () => {
    it('returns message for each name', () => {
        expect(generateMessages('Tyrone')).toStrictEqual(['Hi Tyrone! 50% off our best candies for you today!'])
    })
});
// Expected: "Hi Tyrone! 50% off our best candies for you today!"
// Received: [1, 3, 3, "Tyrone"]
const addItem = require('./array');
const generateMessages = require('./array');
