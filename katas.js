// 1.  How do you find the missing numbers in a given integer array?
const array = [1, 3, 5, 7];

const findMissing = (num) => {
  const max = Math.max(...num);
  const min = Math.min(...num);
  const missing = [];

  for (let i = min; i <= max; i++) {
    if (!num.includes(i)) {
      missing.push(i);
    }
  }
  return missing;
};

console.log(findMissing(array));

// 2.  How do you find the duplicate number on a given integer array?
const duplicateArray = [3, 5, 4, 6, 3, 7];

const findDuplicate = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) return arr[i];
    }
  }
};

console.log(findDuplicate(duplicateArray));
console.log(findDuplicate([7, 4, 2, 7, 12, 26, 78]))

// 3.  How do you find duplicate numbers in an array if it contains multiple duplicates?

// 4.  How do you remove duplicates from an array in place?

// 5.  How do you find the largest and smallest number in an unsorted integer array?
