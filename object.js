const person = {
    name: 'Maxine',
    age: 32,
    address: {
      city: 'London',
      postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
};

//searching for data in an object
// console.log(person.address.city);
// console.log(person.hobbies[1])

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
];

//displaying data from object
const generateMessages = (names, discounts) => {
    return namesAndDiscounts.map((variable) => {
        names = variable.name
        discounts = variable.discount
        return `Hi ${names }, ${discounts } off our best candies for you today!`
    })
} 

// console.log(generateMessages())

//filtering data from object
const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
];

const searchCandies = (searchName, maxPrice) => {
    return candies.filter(candy => {
        return candy.name.startsWith(searchName);
        //chain filter methods
    }).filter(candy => {
        //less than max price
        return candy.price <= maxPrice;
        //map by name
    }).map(candy => {
        return candy.name
    });

}
console.log(searchCandies('P', 20))

module.exports = searchCandies;