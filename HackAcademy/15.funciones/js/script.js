function double (theNumber) {
    return theNumber * 2;
}

function printFullName (firstName, lastName) {
    return `Tu nombre es ${firstName} ${lastName}.`
}

function random () {
    return Math.random() * 100;
}

console.log(double(20))
console.log(printFullName('Fedeico Nicolas Dario', 'Noodt Molins'))
console.log(random())