function isAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }

  function sortString(str) {
    return str.split("").sort().join("");
  }

  return sortString(str1) === sortString(str2);
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
