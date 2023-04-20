// 20.04.2023
// Mstyslav Dmytryk
// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let count = 0;
  while (num !== 0) {
    if (num % 2 === 0) num = num / 2;
    else num--;

    count++;
  }

  return count;
};
