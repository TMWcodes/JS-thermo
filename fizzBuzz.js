
const fizzBuzz = (num) => {
    if (num % 3 && num % 5 === 0) {
        return 'fizzBuzz'
    }
    else if (num % 5 === 0) {
        return 'Buzz'
    }
    else if (num % 3 === 0) {
        return 'Fizz'
    }
    else {
        return(num)
    }
}


//initial expression, condition(if true),increment expression.
for (let i = 0; i < 50; i++) {
    console.log(fizzBuzz(i))
}