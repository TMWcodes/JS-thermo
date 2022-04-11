
//adding to an array
let batch = [1]
//pushing
const addItem = (item) => {
  batch.push(item)
  return batch;
}
console.log(addItem(3))
//concat
const addToBatch = (array, number) => {
    if (array.length >= 5) {
      return array;
    }
  
    return array.concat(number);
}
//break

//sorting arrays
const phoneNumbers = ['1763687364',
'4763687363',
'7867867862',
'aaaaaaaabbbbbbbcccccdddddddd'];

//filter 
//entries with a length under or equal to 10 are returned as true
const checkLength = (phoneNumber) => {
    return phoneNumber.length <= 10;
}

const filterLongNumbers = (phoneNumbers) => {
    return phoneNumbers.filter(checkLength);
}

console.log(`filterLongNumbers = ${filterLongNumbers(phoneNumbers)}`)

// for loop
const shortNumbers= []
for (let i = 0; i < phoneNumbers.length; i++) { //.length is for dynamics array
  if (phoneNumbers[i].length <= 10) {
    shortNumbers.push(phoneNumbers[i]) //(i) is index position, 
  }
}

console.log(`shortNumberLoop = ${shortNumbers}`)

//array of messages

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla']

const generateMessages = names.map(name => {
  return (`Hi ${name} 50% off our best candies for you today!`)
})

console.log(`names array version = ${generateMessages}`)

// const generateMessagesFun = (names) => {
//   return names.map(name => {return `Hi ${name}! 50% off our best candies for you today!`;});
// }

// const generateMessagesFun = (names) => {
//   return `Hi ${names}! 50% off our best candies for you today!`;}

// console.log(generateMessagesFun(['Tyrone']))

module.exports = addToBatch;
module.exports = addItem;
// module.exports = generateMessagesFun;