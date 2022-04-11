describe('user', () => {
    it('can get userName', () => {
        const user = new User('Tyrone');
        expect(user.getName()).toBe('Tyrone')
    });
    it('provides an introduction', () => {
        const user = new User('Tyrone');
        expect(user.getIntroduction()).toBe('My name is Tyrone')
    });
});

const User = require('./user');

// const User = require('./user');

// describe('User class', () => {
//   it('gets name', () => {
//     const user = new User('Uma');
//     expect(user.getName()).toBe('Uma');
//   });

//   it('gets introduction', () => {
//     const user = new User('Uma');
//     expect(user.getIntroduction()).toBe('Hi, my name is Uma');
//   });
// });