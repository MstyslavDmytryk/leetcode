// 20.04.2023
// Mstyslav Dmytryk
// https://leetcode.com/problems/richest-customer-wealth/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let result = 0;

  for (let i = 0; i < accounts.length; i++) {
    let total = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      total += accounts[i][j];
    }
    if (total > result) {
      result = total;
    }
    total = 0;
  }

  return result;
};
