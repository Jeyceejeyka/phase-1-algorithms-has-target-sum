function hasTargetSum(array, target) {
  // Loop through each pair of numbers in the array
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true; // Found a pair that sums to the target
      }
    }
  }

  return false; // No pair sums to the target
}

/* 
  Write the Big O time complexity of your function here:
  Time Complexity: O(n^2) - Nested loops iterate through each pair in the array.
  Space Complexity: O(1) - No additional space is used beyond a few variables.
*/

/* 
  Add your pseudocode here:
  - Iterate through the array with two nested loops:
    - The outer loop picks the first number.
    - The inner loop picks the second number after the first.
  - For each pair, check if their sum equals the target:
    - If yes, return true.
  - If no pair matches, return false after both loops complete.
*/

/* 
  Add written explanation of your solution here:
  This approach uses two nested loops to check every pair of numbers in the array. 
  For each pair, we check if their sum equals the target. 
  If we find a match, we return true immediately. 
  If no match is found after checking all pairs, return false.
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
