const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function loopOverWords(word) {
  // console.log(`word: ${word}`);
  let partial = word.slice(1)
  // console.log(`partial: ${partial}`)
  let upperCaseWord = word.charAt(0).toUpperCase();
  // console.log(`uppercase: ${upperCaseWord}`)
  // console.log(`NEW:` + 
  return upperCaseWord.concat(partial); 
 }
const titleCased = () => {
  let wordMap = tutorials.map((sentence) => sentence.split(" ").map(loopOverWords).join(" "));
  console.log(`wordmap: ${wordMap}`)
  return wordMap
}
console.log(titleCased());


// const toNormal = () => {
//   titleCased.map((sentence) => sentence.join(" ").map());
//   return titleCased
// }
// toNormal();

