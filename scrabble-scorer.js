// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};


function oldScrabbleScorer(word) {
	
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 };

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  word = input.question("Let's play some scrabble! Enter a word to score: ");
  word = word.toUpperCase();
  return word;
};

function simpleScore(userWord) {
  let letterPoints = 0;
  for (let i = 0; i < word.length; i++){ 
    letterPoints += 1;	
	}
  return letterPoints;
};

function vowelBonusScore(userWord) {
  let letterPoints = 0;
  let vowelLetters = ['A','E','I','O','U','Y'];
  for (let i = 0; i < word.length; i++ ) {
    if (vowelLetters.includes(word[i])) {
      letterPoints += 3;
    } else {
      letterPoints += 1;
    }
  }
return letterPoints;
};

function scrabbleScore(userWord) {
  let letterPoints = 0;
  let word = userWord.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    letterPoints += newPointStructure[word[i]];
       } 
     
   return letterPoints;
};

const scoringAlgorithms = [

 {  
    name: "Simple Score",
    description: "Each letter is woth 1 point.",
    scoreFunction: simpleScore
  },

  {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoreFunction: vowelBonusScore
  },
  
 {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoreFunction: scrabbleScore
  },
];


let algorQuery = `Which scoring algorithm would you like to use?
0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}
2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}
Enter 0, 1, or 2: `;

function scorerPrompt() {
let scoreSelection = input.question(algorQuery);
console.log("Algorithm Name: ", scoringAlgorithms[scoreSelection].name);
console.log("Scoring Function Result: ", scoringAlgorithms[scoreSelection].scoreFunction(word));
};


function transform(old) {
  let newStructure = {};
  for (evr in old) {
    for (i = 0; i < old[evr].length; i++) {
    newStructure[old[evr][i].toLowerCase()] = (Number(evr));
    } 
  } 
  return newStructure;
}

let newPointStructure = {};
newPointStructure = transform(oldPointStructure);

function runProgram() {
  let word = "";
  initialPrompt(this.word);
  scorerPrompt(this.scoreSelection);
};


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

