const today = new Date();
console.log(today);

const date = new Date('1971-12-16');
console.log(date.getDay());

const specificDate = new Date(1971, 11, 16);
console.log(specificDate.toLocaleDateString('en-GB'));