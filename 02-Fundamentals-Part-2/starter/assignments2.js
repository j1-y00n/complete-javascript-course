// lecture : Functions
function describeCountry(country, population, capitalCity) {
  const describe = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return describe;
}

const describeKorea = describeCountry("Korea", 50, "Seoul");
console.log(describeKorea);

// lecture : Function Declarations vs Expressions
// Declarations
function percentageOfWorld1(population) {
  const percentage = (population / 7900) * 100;
  return percentage;
}
const chinaPercnetage = percentageOfWorld1(1441);
console.log(chinaPercnetage);

// Expressions
const percentageOfWorld2 = function (population) {
  const percentage = (population / 7900) * 100;
  return percentage;
}
const koreaPercentage = percentageOfWorld2(50);
console.log(koreaPercentage);

// lecture : Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100;
const somePercentage = percentageOfWorld3(1234);
console.log(somePercentage);

// lecture : Functions Calling Other Functions
const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world.`
}
console.log(describePopulation("Korea", 50));

// lecture : Introduction to Arrays
const populations = [50, 1441, 35, 1234];
console.log(populations.length == 4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages)

// lecture : Basic Array Operations(Methods)
const neighbours = ['Japan', 'China'];
neighbours.push('Utopia');
neighbours.pop();
console.log(neighbours.includes('Germany') ? '' : 'Probably not a central European country :D');
const indexJapan = neighbours.indexOf('Japan');
neighbours[indexJapan] = 'Republic of Japan'
console.log(neighbours)

// lecture : Introduction to Objects
const myCountry ={
  country: 'Korea',
  capital: 'Seoul',
  language: 'Korean',
  population: 50,
  neighbours: ['Japan', 'China'],
  describe: function() {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },
  checkIsland: function() {
    this.isIsland = this.neighbours.length ? true : false;
    return myCountry.isIsland;
  }
};

// lecture : Dot vs Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population = myCountry.population + 2;
myCountry['population'] = myCountry['population'] - 2;

// lecture : Object Methods
console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.isIsland);

// lecture : The for Loop
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);  
}

// lecture : Looping Array, Breaking and Continuing
const populations2 = [50, 1441, 35, 1234];
let percentages2 = [];
for (let i = 0; i < populations2.length; i++) {
  percentages2.push(percentageOfWorld1(populations2[i]));
}
console.log(percentages2);

// lecture : Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'], 
  ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }  
}

// lecture : The while Loop
let percentages3 = [];
let i = 0;
while (i < populations2.length) {
  percentages3.push(percentageOfWorld1(populations2[i]));
  i++;
}
console.log(percentages3)