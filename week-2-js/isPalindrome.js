function isPalindrome(str) {
  // Normalize the string: convert to lowercase and remove non-alphanumeric characters
  let filteredArr = [];
  for(let char of str) {
    if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
      filteredArr.push(char.toLowerCase());
    }
  }

  let filteredStr = filteredArr.join('');

  console.log(filteredStr);


  let left = 0;
  let right = filteredStr.length - 1;
  while(left < right) {
    if(filteredStr[left] !== filteredStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("mom")); // Output: true
console.log(isPalindrome("mummy")); // Output: false
console.log(isPalindrome("Mom!")); // Output: true
