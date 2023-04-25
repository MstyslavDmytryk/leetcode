// 25.04.2023
// Mstyslav Dmytryk
// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const result = {};

  for (let i = 0; i < mat.length; i++) {
    result[i] = 0;
    for (let j = 0; j < mat[i].length; j++) {
      result[i] += mat[i][j];
    }
  }

  return Object.keys(result)
    .sort((a, b) => result[a] - result[b])
    .slice(0, k);
};
