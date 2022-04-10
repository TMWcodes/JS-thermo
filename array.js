
//adding to an array
let batch = [1]
//pushing
const addItem = (item) => {
  batch.push(item)
  return batch
}

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

// console.log(checkLength(phoneNumbers))
// console.log(checkLength('123456789')) //empty argument/phoneNumber = reference error, 

//
const filterLongNumbers = (phoneNumbers) => {
    return phoneNumbers.filter(checkLength);
}

console.log(filterLongNumbers(phoneNumbers))

//for loop
const shortNumbers= []
for (let i = 0; i < phoneNumbers.length; i++) { //.length is for dynamics array
  if (phoneNumbers[i].length <= 10) {
    shortNumbers.push(phoneNumbers[i]) //(i) is index position, 
  }
}

console.log(`shortNumber = ${shortNumbers}`)

module.exports = addToBatch;
module.exports = addItem;