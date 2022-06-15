// This uses a binary search to narrow down the search area to not look through all the numbers in the array.

const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  console.log(middle);

  if (num === arr[middle]) {
    return "fount it";
  } else if (num < arr[middle]) {
    right = middle;
    return `bring right down to ${right}`;
  } else if (num > arr[middle]) {
    left = middle + 1;
    return `bring left up to ${left}`;
  }
};

console.log(binarySearch(data, 38));

// Example of a recursion

const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num, left, right) => {
  let middle = MAth.floor((left + right) / 2);

  //   range overlapped, so never found number
  if (left > right) {
    return -1;
  } else if (num === arr[middle]) {
    return middle;
  } else if (num < arr[middle]) {
    // call again with a new right value
    return binarySearch(arr, num, left, middle - 1);
  } else {
    // call again with a new left value
    return binarySearch(arr, num, middle + 1, right);
  }
};

// set initial left and right values on first call
console.log(binarySearch(data, 12, 0, data.length - 1));
