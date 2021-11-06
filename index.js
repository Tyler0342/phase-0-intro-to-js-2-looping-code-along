// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);

names = ["Ada", "Brendan", "Ali"];
time = "birthday"

function writeCards(names, time) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${time} gift!`);
    }
    return newArray;
}

writeCards();

function countDown(num) {
    let i = num;
    while (i>= 0) {
        console.log(i--);
    }
}
countDown(10);