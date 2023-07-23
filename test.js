const countVowelsAndConsonants = (str) => {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char.match(/[a-zA-Z]/)) {
      consonantCount++;
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
};
const Check = "Hello World";
const result = countVowelsAndConsonants(Check);
console.log(result);

const isPalindrome = (str) => {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanedStr === cleanedStr.split("").reverse().join("");
};

const inputString = "hello";
console.log(isPalindrome(inputString));

const callBack = () => {
  callBack2();
  console.log("A");
};

const callBack2 = () => {
  console.log("B");
};

console.log(callBack());
