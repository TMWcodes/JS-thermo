const sayHello = (name) => {
    //backtick with string interpolation
    return `Hello ${name}`;
}

console.log(sayHello('Ty'));
console.log('rename')

const makers = 'december'
const age = 29 
let employment = 'unemployed'
employment = 'employed'

//03
console.log(makers)
console.log(employment)
console.log(employment + ' by ' + makers)

const glassySky = () => {
return 'above'
}

const shatters = (overMe) => {
    return overMe + ' and today'
}

console.log(glassySky)
console.log(glassySky())
console.log(shatters('tonight'))
const add = (a, b) => {
    return a + b;
  }
  
  const multiply = (a, b) => {
    return a * b;
  }
  
  console.log(multiply(2, add(4, 4)));