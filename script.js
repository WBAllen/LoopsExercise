// 1
for (i = 1; i <= 7; i++) {
    console.log(i)
};

let b = `=`.repeat(25);
console.log(b);

// 2 (NEED TO REVIEW THIS ONE)
for (i = 5; i <= 25; i += 4) {
    console.log(i)
};

console.log(b);

// 3a
const wizards = [
    "Harry Potter", 
    "Hermione Granger", 
    "Ron Weasley"];

// 3b
for (friends of wizards) {
    console.log(friends);
}

console.log(b);

// 4a
let harryPotterMovies = 0

// 4b (NEED TO REVIEW WHILE LOOPS)
while (harryPotterMovies <= 7){
    harryPotterMovies++;
    // 4c
    console.log(harryPotterMovies);
}

// BONUS
// 5a
const hogwartsHouses = [
    "Gryffindor", 
    "Hufflepuff", 
    "Ravenclaw", 
    "Slytherin"
];

// 5b
for (houses of hogwartsHouses){
    for (names of houses){
        console.log(names);
    }
}

// 6a
const quote = [
    "Yer", 
    "A", 
    "Wizard", 
    "Harry"
];

// 6b
// let words = ``;

// for (i = 0; i < quote.length; i++){
//     words = words + quote[i] + ` `;
// }

// console.log(words);

// OR
let magicQuote = ` `;
for (i = 0; i < quote.length; i++){
    magicQuote += ` ${quote[i]}`;
}
magicQuote = magicQuote.trim();
console.log(magicQuote);

// 7
// ! Inspired by FizzBuzz
for (i = 1; i <= 25; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`Expecto Patronum`);
    } else if (i % 3 === 0){
        console.log(`Expecto`);
    } else if (i % 5 === 0){
        console.log(`Patronum`);
    } else {
        console.log(i);
    }
}

