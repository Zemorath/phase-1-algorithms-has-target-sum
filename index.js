function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i=0; i < array.length; i++) {
    for (let a= i + 1; a < array.length; a++) {
      if (array[i] + array[a] == target) {
        return true;
      }
    };
  };
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  function (array, target)
    loop through array for first number of equation
      loop through array for second numer of equation
        if target minus first number is equal to second number, return true
    if it gets through each combination of numbers and doesn't return true, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
