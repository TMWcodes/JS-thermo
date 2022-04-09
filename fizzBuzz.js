
const fizzBuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    }
    else if (num % 5 === 0) {
        return 'Buzz';
    }
    else if (num % 3 === 0) {
        return 'Fizz';
    }
    else {
        return(num)
    }
}


//initial expression, condition(if true),increment expression.
for (let i = 1; i <= 30; i++) {
    console.log(fizzBuzz(i))
}

module.exports = fizzBuzz;