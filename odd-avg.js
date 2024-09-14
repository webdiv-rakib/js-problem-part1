/**
 * function takes an array as parameter
 * give me tha average of the odd numbers in the array
 */

/** 
 * two possible solution
 * 1. put odd numbers in a array
*/
function oddAverage(numbers) {
    const odds = [];
    for (number of numbers) {
        if (number % 2 === 1) {
            // console.log(number);
            odds.push(number);
        }
    }
    // odds is the array that contains only the odd numbers
    // console.log(odds);
    let sum = 0;
    for (const number of odds) {
        sum = sum + number;
    }
    const len = odds.length;
    console.log(sum, len);
    const avg = sum / len;
    return avg;
}
const numbers = [42, 12, 46, 32, 25, 72, 86, 77, 55, 21, 19, 17,101];
const avg = oddAverage(numbers);
console.log("Average of the odd numbers is:", avg);