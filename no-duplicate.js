/**
 * array has some duplicate elements
 * []
 */
const biriyaniKhor = ['abul', 'babul', 'kabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 5, 7, 9, 11, 15, 5, 9, 7, 13, 19, 21, 11];

function noDuplicate(array) {
    // console.log(array);
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);