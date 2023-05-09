// 09.05.2023
// Mstyslav Dmytryk
// https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let string = magazine.split("");

  for (let i = 0; i < ransomNote.length; i++) {
    if (!string.includes(ransomNote[i])) {
      return false;
    }

    const index = string.indexOf(ransomNote[i]);
    string.splice(index, 1);
  }

  return true;
};
