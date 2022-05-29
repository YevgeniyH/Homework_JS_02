function findLongestWord(string) {
  
  const arrayWord = string.split(" ");
  let maxCountLetter = 0;
  let longestWord = "";

    for (const ar of arrayWord) {
        if (ar.length > maxCountLetter) {
        maxCountLetter = ar.length;
        longestWord = ar;
        }
    }

    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));