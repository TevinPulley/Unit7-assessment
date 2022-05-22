const perf = require("execution-time")();
//? 1) Sum Zero

const numbs = [1, 2, -2];
const otherNumbs = [1, 2, 3];

function addToZero(numbs) {
  for (let i = 0; i < numbs.length; i++) {
    for (let j = 0; j < numbs.length; j++) {
      if (numbs[i] + numbs[j] == 0) {
        result = true;

        // console.log(numbs[i] + numbs[j]);
        return true;
      } else {
        result = false;
        // console.log(numbs[i] + numbs[j]);
      }
    }
  }

  return result;
}
// console.log(addToZero(numbs));

// out of 5 tries the average runtime is roughly 128.08μs
/////////////////////////////////////////////////////////////////////////
//? 2) Unique Characters

const word1 = "SnoopDog";
const word2 = "SnupeDawg";

function uniqueChar(wrd) {
  for (let i = 0; i < wrd.length; i++) {
    for (let j = 0; j < wrd.length; j++) {
      if (i == j) {
        j++;
      }
      if (wrd[i] == wrd[j]) {
        // console.log(wrd[i] + wrd[j]);
        return false;
      } else {
        // console.log(wrd[i] + wrd[j]);
        result = true;
      }
    }
  }
  return result;
}
// console.log(uniqueChar(word2));

// word1 out of 5 tries the average runtime is roughly 126.76μs
// word2 out of 5 tries the average runtime is roughly 116.86μs
////////////////////////////////////////////////////////////
//? 3) Pangram Sentence

// const letters = "abcdefghijklmnopqrstuvwxyz";
const sentence1 = "The quick brown fox jumps over the lazy dog.";
const sentence2 = "I like cats, but not mice";

function panSentence(wrd) {
  let strArr = wrd.toLowerCase();
  let letters = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < letters.length; i++) {
    if (strArr.indexOf(letters[i]) < 0) {
      return false;
    }
  }
  return true;
}

// console.log(panSentence(sentence2));

// sentence1 out of 5 tries the average runtime is roughly 133.2μs
// sentence2 out of 5 tries the average runtime is roughly 122.1μs

//////////////////////////////////////////////////////////////////////////////////////////////

//? 4) Longest Word

const wordArray = ["dog", "cat", "horse"];

function extractLongestWord(items) {
  let longestWord = "";
  items.forEach((item) => {
    if (item.length > longestWord.length) {
      longestWord = item;
    }
  });

  return longestWord;
}

// console.log(extractLongestWord(wordArray));

// longestWord out of 5 tries the average runtime is roughly 117.76μs

//////////////////////////////////////////////////////////

perf.start();
extractLongestWord(wordArray);
let resultLongestWord = perf.stop();

console.log("Results for the longestWord1 function:");
console.log(resultLongestWord.preciseWords);
