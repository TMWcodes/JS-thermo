// describe('', () => {
//     it('', () => {
//         expect().matcher()
//     });
// });

describe('search candies', () => {
    it('returns maltesers and mars', () => {
        expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers'])
    });

    it('returns mars', () => {
        expect(searchCandies('Ma', 2)).toEqual(['Mars'])
    });

    it('returns Skitties, Skittles, Starburst', () => {
        expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst'])
    });

    it('returns Skitties, Skittles', () => {
        expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles'])
    });
});



const searchCandies = require('./object');