let js = 'amazing';
console.log(40 + 8 +23 -10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);


let javascriptIsFun = true;
console.log(javascriptIsFun)

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!"
console.log(typeof javascriptIsFun);

let year;
console.log(typeof year);

year = 1991;
console.log(typeof year);


const firstName2 = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year2 = 2023;
const jonas = "I'm " + firstName2 + ', a ' + (year2 - birthYear) + ' years old ' + job + '!';
console.log(jonas);
const jonasNew = `I'm ${firstName2}, a ${year2 - birthYear} years old ${job}!`;
console.log(jonasNew);


const age = 15;
if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearLeft} years`);
}


//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(String(23), 23);

// 5 falsy values : 0, '', undefined, null, NaN
console.log(Boolean(0));


const day = 'monday';
switch (day) {
  case 'monday': //day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  default:
    console.log('Not a valid day!');
}

// => 위와 같은 표현
if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else {
  console.log('Not a valid day!');
}


const age2 = 23;
const drink = age2 >= 18 ? 'wine🍷' : 'water💧';
console.log(drink);

// =>위와 같은 표현
let drink2;
if (age2 >= 18) {
  drink2 = 'wine🍷';
} else {
  drink2 = 'water💧';
}
console.log(drink2);

console.log(`I like to drink ${age2 >= 18 ? 'wine🍷' : 'water💧'}`);
