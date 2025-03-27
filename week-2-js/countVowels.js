function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for(char of str) {
    if(vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello World")); // Output: 3

console.log(countVowels("aeiou")); // Output: 5