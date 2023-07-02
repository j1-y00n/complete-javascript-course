// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Coding Challenge #1
// Test Data 1: [17, 21, 23]
// Test Data 2: [12, 5, -5, 0, 4]

const printForecast = function(arr) {
  let text = '';
  for (let i = 0; i < arr.length; i++) {
    text += `... ${arr[i]}°C in ${[i + 1]} days `;
  }
  return text + "..."
}

const arr = [12, 5, -5, 0, 4]
console.log(printForecast(arr));