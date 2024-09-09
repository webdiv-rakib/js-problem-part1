// 12 inch 1 feet
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const rakibsHeight = inchToFeet(75);
// console.log("Your height is:", rakibsHeight, 'ft');

// 75 = 6feet 3inch
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetInt = parseInt(feetFraction);
    const inchLeft = inch % 12;
    const result = feetInt + "ft " + inchLeft + "inch";
    return result;
}

const rakibHeight = inchToFeet2(75);
// console.log(rakibHeight);

function subtraction(num1, num2) {
    const biyogFol = num1 - num2;
    console.log(biyogFol);
}
subtraction(-5, 5);

// Miles to kilometer conversion
function mileToKilometer(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}
const kilometer = mileToKilometer(5);
console.log(kilometer);

// kilometer to miles
function kilometerToMile(kilo) {
    const mile = kilo / 1.60934;
    return mile;
}
const miles = kilometerToMile(5);
console.log(miles.toFixed(2));