const a = 7;
const b = 4;

function addition(a, b) {
    return a + b;

}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b == 0) {
        return 'cannot divide number by 0';
    } else {
        return a / b;
    }
}

function modulo(a, b) {
    return a % b;
}

console.log(`The addition of ${a} and ${b} is ` + addition(a, b));
console.log(`The subtraction of ${a} and ${b} is ` + subtraction(a, b));
console.log(`The multiplication of ${a} and ${b} is ` + multiplication(a, b));
console.log(`The division of ${a} and ${b} is ` + division(a, b));
console.log(`The modulo of ${a} and ${b} is ` + modulo(a, b));