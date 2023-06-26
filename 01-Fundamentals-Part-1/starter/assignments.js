// lecture : values and variables
const country = "Korea";
const continent = "Asia";
let population = 50;

console.log(country);
console.log(continent);
console.log(population);

// lecture : Data types
let isIsland = false;
const language = "Korean";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// lecture : let, const and var

// lecture : basic operators
console.log(population / 2);
let finlandPopulation = 6;
console.log(finlandPopulation < population);
let averagePopulation = 33;
console.log(averagePopulation > population);
const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);

// lecture : Strings and Template Literals
const descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(descriptionNew);

// lecture : Taking decisions: if/else statements
if (population > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  const minusPopulation = averagePopulation - population;
  console.log(`${country}'s population is ${minusPopulation} million below average`)
}

// lecture : Type conversion and coercion
'9' - '5'; // 4
'19' - '13' + '17'; // 617
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 1143

// lecture : Equality Operators: == vs ===
const numNeighbours = Number(window.prompt('How many neighbour countries does your country have?'));
if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}

// lecture : Logical Operators
const sarahLanguage = "English";
const sarahPopulation = 50;
const sarahIsland = false;

if (sarahLanguage === language && sarahPopulation < population && sarahIsland === isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// lecture : The switch Statements
switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('Most number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}

// lecture : The Conditional (Ternary) Operator
console.log(`${country}'s population is ${population > 33 ? 'above average' : 'below average'}.`);


