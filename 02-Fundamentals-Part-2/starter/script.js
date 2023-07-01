'use strict';

// # 33
function logger() {
  console.log('my name is Jonas');
}

// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// # 34
// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);

// # 35
// Arrow funtion
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, "Jonas"));


// * challenge #1 *
const calcAverage = (first, second, third) => (first+second+third)/3;

const scoreDolphins = calcAverage(44, 23, 71);

const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2* avgKoalas) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= 2* avgDolphins) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        return `No team wins...`;
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));


// # 39
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends[friends.length -1]);
friends[2] = 'Jay';

const years =  new Array(1991, 1984, 2008, 2020);

const firstName = 'Jonas';
const jonas = [firstName, 'Schemdtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas)

// # 40
const friends2 = ['Michael', 'Steven', 'Peter'];
friends.push('Jay');
friends.unshift('John');
friends.pop(); // Last
friends.shift(); // First
friends.indexOf('Steven');
friends.includes('Steven'); // return true
friends.includes('Bob'); // return false


// * challenge #2 *
const calcTip = (billValue) => {
  if (50 <= billValue && billValue <= 300) {
      return billValue * 0.15;
  } else {
      return billValue * 0.2;
  }
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

console.log(tips, total)


// # 42
const jonas2 = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Steven', 'Peter']
};

// # 43
console.log(jonas2.lastName); // dot : member access
console.log(jonas2['lastName']); // [] : computed member access

const nameKey = 'Name';
console.log(jonas2['first' + nameKey]);
console.log(jonas2['last' + nameKey]);

jonas2.location = 'Portugal';
jonas2['twitter'] = '@jonas'

// challenge
//"Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas2.firstName} has ${jonas2.friends.length} friends, and his best friend is called ${jonas2.friends[0]}`)

// # 44
const jonas3 = {
  firstName: 'Janas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Steven', 'Peter'],
  hasDriverLicense: true,

  // calcAge: function(birthYear) {
  //   return 2037 - birthYear;
  
  // calcAge: function() {
  //   console.log(this)
  //   return 2037 - this.birthYear;
  // }

  calcAge: function() {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummery: function() {
    return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriverLicense ? "a driver's license" : "not driver's license"}`;
  }
};

console.log(jonas3.calcAge());
console.log(jonas3.age);

// challenge
// "Jonas is a 46 years old teacher, and he has a/not driver's license"
console.log(jonas3.getSummery());


// * challenge #3 *
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
      this.bmi = this.mass / (this.height * this.height); 
      return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
      this.bmi = this.mass / (this.height * this.height); 
      return this.bmi;
  }
};

mark.calcBMI(); // 이 코드 없이 mark.bmi를 사용할 수 없음
john.calcBMI();

console.log(mark.bmi > john.bmi ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!` : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);


// # 46
for(let rep = 1; rep <=10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`)
}

// # 47
const jonas4 = [
  'Jonas', 
  'Schemdtmann', 
  2037 - 1991, 
  'teacher', 
  ['Michael', 'Steven', 'Peter'],
  true
];
const types = [];

for (let i = 0; i < jonas4.length; i++) {
  console.log(jonas4[i]);

  // Filling types array
  // types[i] = typeof jonas4[i];
  types.push(typeof jonas4[i]);
};
console.log(types);

const years2 = [1991, 1984, 2008, 2020];
const ages2 = [];

for (let i = 0; i < years2.length; i++) {
  ages2.push(2037 - years2[i]);
}
console.log(ages2)

// continue and break
console.log('-----ONLY STRINGS-----')
for (let i = 0; i < jonas4.length; i++) {
  if(typeof jonas4[i] !== 'string') continue;

  console.log(jonas4[i], typeof jonas4[i]);
};

console.log('-----BREAK WITH NUMBER-----')
for (let i = 0; i < jonas4.length; i++) {
  if(typeof jonas4[i] === 'number') break;

  console.log(jonas4[i], typeof jonas4[i]);
};

// # 48
const jonas5 = [
  'Jonas', 
  'Schemdtmann', 
  2037 - 1991, 
  'teacher', 
  ['Michael', 'Steven', 'Peter'],
  true
];

for (let i = jonas5.length - 1; i >= 0; i--) {
  console.log(i, jonas5[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----starting exercise ${exercise}`);
  
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: lifting weight ${rep}`);
  }
}

// # 49
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end..');
}


// * challenge #4 *
const calcTip2 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills2 = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tips2 = [];
const totals = [];

for (let i = 0; i < bills2.length; i++) {
    tips.push(calcTip(bills2[i]));
    totals.push(calcTip(bills2[i]) + bills2[i])
}

const calcAverage2 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
    return sum / arr.length;
}

console.log(bills2, tips2, totals, calcAverage2(totals));
