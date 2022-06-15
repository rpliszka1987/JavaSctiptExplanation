// findIndex() is used to check at what index value the number is located at in the data array. Known as linear search.

const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const findIndex = (num) => {
  for (i = 0; i < data.length; i++) {
    if (data[i] === num) {
      console.log(`${num} found at index ${i}`);
      break;
    }
  }
};
