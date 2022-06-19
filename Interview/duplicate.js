// Create variable for the most appearing value
// Create a variable for the most appearing count

// Loop over array (i)
// Start a counter for the number of occurance

// Loop over array again (j)
// compare indexes
// if same increase tje counter

// if counter > current most appearing count
// update "most" variable to match

// return most appearing value and count

const numbers = [
  41, 24, 28, 1, 40, 41, 32, 33, 50, 5, 34, 5, 21, 21, 43, 43, 21, 4, 49, 24,
];

const mostDuplicates = (arr) => {
  let mostValue;
  let mostCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let counter = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
      }
    }

    if (counter > mostCount) {
      mostCount = counter;
      mostValue = arr[i];
    }
  }
  return `${mostValue} appeared ${mostCount} times.`;
};

// create an empty object map

// loop over array
// if array[i] not in map
// create new key/value pair on map =1
// else
// increment key/value pair by 1

// crete variable for most apprearing value
// create a variable for most appearing count

// loop over objects keys/values
// if value > current most appearing count
// update 'most' variable to match

// return most appearing value and count

const optimizedDuplicates = (arr) => {
  const map = {};

  for (let i = 0; i <= arr.length; i++) {
    if (map[arr[i]] === undefined) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]]++;
    }
  }

  let mostValue;
  let mostCount = 0;

  for (const number in map) {
    if (map[number] > mostCount) {
      mostCount = map[number];
      mostValue = number;
    }
  }

  return `${mostValue} appeared ${mostCount} times.`;
};

module.exports = { mostDuplicates, optimizedDuplicates };
