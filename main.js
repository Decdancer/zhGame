console.log(document)

let playerHasWon = false;

let resetCounter = 7;

const quizColors = [
    {name: 'Tomato',        bcolor: '#FF6347', hex: 'rgb(255, 99, 71)'},
    {name: 'IndianRed',     bcolor:	'#CD5C5C', hex:	'rgb(205, 92, 92)'},
    {name: 'LightCoral',    bcolor:	'#F08080', hex:	'rgb(240, 128, 128)'},
    {name: 'Salmon',        bcolor:	'#FA8072', hex:	'rgb(250, 128, 114)'},
    {name: 'DarkSalmon',    bcolor:	'#E9967A', hex:	'rgb(233, 150, 122)'},
    {name: 'LightSalmon',   bcolor:	'#FFA07A', hex:	'rgb(255, 160, 122)'},
    {name: 'Crimson',       bcolor:	'#DC143C', hex:	'rgb(220, 20, 60)'},
    {name: 'Red',           bcolor: '#FF0000', hex: 'rgb(255,0, 0)'},
    {name: 'FireBrick',     bcolor:	'#B22222', hex:	'rgb(178, 34, 34)'},
    {name: 'DarkRed',       bcolor:	'#8B0000', hex:	'rgb(139, 0, 0)'},
    {name: 'Orange',        bcolor:	'#FFA500', hex:	'rgb(255, 165, 0)'},
    {name: 'Oranged',       bcolor:	'#FF4500', hex:	'rgb(255, 69, 0)'},
];

/*
class ColorsGame {
    constructor(quizColors) {
        this.quizColors = quizColors;
        this.shuffleColors(this.quizColors);
    }
};

new game = new ColorsGame(quizColors);
console.log(game.quizColors)
quizC1.shuffleColors()
*/


// Game - to see a word & guess the correct pic out of 3

//1) random choice of 3 objects colors(pics)-words from the source

function shuffleColors(arr) {
    let newArr = [];
    let arr1 = arr.slice()
    let currentIndex = arr.length;
    let randomIndex;
    while (currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex--);
        newArr.push(arr1.splice(randomIndex, 1)[0])
    }
    return newArr = newArr.slice(-3);
};
//console.log(newArr);
console.log(shuffleColors(quizColors)); 
console.log(shuffleColors(quizColors));


//2) random (no need in random anymore because of the shuffle before) placement of those three colors(pics) on three cards-places

/*
document.querySelectorAll('.cards > div').forEach(function(card) {
    console.log(card);
    card.load = gameStep;
    card.onclick = checkCorrect; 
})

function gameStep(card) {
    card.style.borderColor = '#999999';
    let randomArr = shuffleColors(quizColors);
    let name2Guess = document.querySelector("#quiz-title > span");
    let random3 = Math.floor(Math.random() * 3);
    console.log(randomArr)

    for (let i = 0; i <= arr.length; i++) {

        card.style.backgroundColor += randomArr[i].bcolor;
        card.value += randomArr[i].name;

        name2Guess.innerText = randomArr[random3].name;

        console.log(random3)
        console.log(randomArr[random3].name)
    };
}
*/
function resetGame() { //new shuffle

    playerHasWon = false;

    document.querySelectorAll('.cards > div').forEach(function(card) { 
        card.style.borderColor = '#888888';
    })

    let newArr8 = shuffleColors(quizColors)
    console.log(newArr8)

    newCard1 = document.querySelector('#card1')
    newCard1.style.backgroundColor = newArr8[0].bcolor;
    newCard1.value = newArr8[0].name;
    //console.log(newCard1)
    //console.log(newCard1.value)

    newCard2 = document.querySelector('#card2')
    newCard2.style.backgroundColor = newArr8[1].bcolor;
    newCard2.value = newArr8[1].name;
    //console.log(newCard2)
    //console.log(newCard2.value)

    newCard3 = document.querySelector('#card3')
    newCard3.style.backgroundColor = newArr8[2].bcolor;
    newCard3.value = newArr8[2].name;
    //console.log(newCard3)
    //console.log(newCard3.value)


    //3) random choice of 1 word from those 3 to display as quiz-word
    document.querySelector("#quiz-title").innerHTML = 'Which color is <span>what</span>?'

    newWhat1 = document.querySelector("#quiz-title > span")
    let random3 = Math.floor(Math.random() * 3);
    newWhat1.innerText = newArr8[random3].name
    //console.log(random3)
    //console.log(newArr8[random3].name)
}

//

let newArr2 = shuffleColors(quizColors)
console.log(newArr2)

let newCard1 = document.querySelector('#card1')
newCard1.style.backgroundColor = newArr2[0].bcolor;
newCard1.value = newArr2[0].name;
//console.log(newCard1)
//console.log(newCard1.value)

let newCard2 = document.querySelector('#card2')
newCard2.style.backgroundColor = newArr2[1].bcolor;
newCard2.value = newArr2[1].name;
//console.log(newCard2)
//console.log(newCard2.value)

let newCard3 = document.querySelector('#card3')
newCard3.style.backgroundColor = newArr2[2].bcolor;
newCard3.value = newArr2[2].name;
//console.log(newCard3)
//console.log(newCard3.value)


//3) random choice of 1 word from those 3 to display as quiz-word

let newWhat1 = document.querySelector("#quiz-title > span")
let random3 = Math.floor(Math.random() * 3);
newWhat1.innerText = newArr2[random3].name
console.log(random3)
console.log(newArr2[random3].name)


//4) user clicks on a card to check if the guess is correct


document.querySelectorAll('.cards > div').forEach(function(card) {
    card.onclick = checkCorrect;  
})


function checkCorrect(event) {
    if (playerHasWon === false) {

        //console.log(event.target.value);
        //console.log(`checked ${event.target.id}`);

        countAtt = document.querySelector('#all-attempts');
        countAtt.innerText++
        document.querySelector('#all-attempts').innerText = countAtt.innerText++
        console.log(countAtt)

        //console.log(document.querySelector("#quiz-title > span").innerText)

        if (event.target.value !== document.querySelector("#quiz-title > span").innerText) {
            event.target.style.borderColor = 'red';
            //event.target.onclick('checked'); -> not working
            console.log('no711');
        }        
         else {
            event.target.style.borderColor = 'green';
            document.querySelector("#quiz-title").innerHTML= 'Great!';
    
            //event.target.onclick('good'); -> not working
            //console.log('yes2');
            countSuccess = document.querySelector('#correct-attempts');
            countSuccess.innerText++
            document.querySelector('#correct-attempts').innerText = countSuccess.innerText++ ;
            //console.log(countAtt);

            playerHasWon = true;
            resetCounter -= 1;

                if (resetCounter > 0) {
                    setTimeout(resetGame, 1500)
                }
                else {
                  console.log('You are awesome!');
                  document.querySelector("#quiz-title").innerText = `You are awesome!`;
                }
        }
    }
}

/*
    document.querySelectorAll('.cards > div').forEach(function(card) { 
        card.style.borderColor = '#999999';
    })

    let newArr8 = shuffleColors(quizColors)
console.log(newArr8)

 newCard1 = document.querySelector('#card1')
newCard1.style.backgroundColor = newArr8[0].bcolor;
newCard1.value = newArr8[0].name;
//console.log(newCard1)
//console.log(newCard1.value)

 newCard2 = document.querySelector('#card2')
newCard2.style.backgroundColor = newArr8[1].bcolor;
newCard2.value = newArr8[1].name;
//console.log(newCard2)
//console.log(newCard2.value)

 newCard3 = document.querySelector('#card3')
newCard3.style.backgroundColor = newArr8[2].bcolor;
newCard3.value = newArr8[2].name;
//console.log(newCard3)
//console.log(newCard3.value)


//3) random choice of 1 word from those 3 to display as quiz-word

 newWhat1 = document.querySelector("#quiz-title > span")
let random3 = Math.floor(Math.random() * 3);
newWhat1.innerText = newArr8[random3].name
console.log(random3)
console.log(newArr8[random3].name)
    }
    */



/* Test - clickFunction

function clickFunction1() {
    let cardThis = document.querySelector('#card1')
    counterAtt = document.querySelector('#all-attempts')
    counterAtt.innerText++
    document.querySelector('#all-attempts').innerText = counterAtt.innerText++
    console.log(counterAtt)
    if (cardThis.value !== newWhat1.innerText) {
        cardThis.style.borderColor = 'black';
        console.log('no711');
} 
    else {cardThis.style.borderColor = 'green';
        console.log('yes2');
        return shuffleColors(quizColors)}
}

document.querySelector('#card2').addEventListener('click', clickFunction2);
function clickFunction2() {
    console.log('click');
}

function clickFunction2() {
    let cardThis = document.querySelector('#card2')
    if (cardThis.value !== newWhat1.innerText) {cardThis.style.borderColor = 'black';
    console.log('no2')} 
    else {cardThis.style.borderColor = 'green';
        console.log('yes2');
        }
}

document.querySelector('#card3').addEventListener('click', clickFunction3);
function clickFunction3() {
    console.log('click');
}

function clickFunction3() {
    let cardThis = document.querySelector('#card3')
    if (cardThis.value !== newWhat1.innerText) {cardThis.style.borderColor = 'black';
    console.log('no3')} 
    else {cardThis.style.borderColor = 'green';
        console.log('yes3');
        }
}


//Test - 4-right) if player clicks on the correct pic -> its border turns green, score++ -> in a moment game step 1)
if (newCard1.value === newWhat1.innerText) {console.log('yes1')}
else if (newCard2.value === newWhat1.innerText) {console.log('yes2')}
else if (newCard3.value === newWhat1.innerText) {console.log('yes3')}
else {console.log('no3')};

//Test - 4-wrong) not correct pic -> its border turns red
if (newCard1.value !== newWhat1.innerText) {console.log('no1')}
else if (newCard2.value !== newWhat1.innerText) {console.log('no2')}
else if (newCard3.value !== newWhat1.innerText) {console.log('no3')}
else {console.log('no4')};

// Test - insert a new color-name to look for
const newWhat = document.querySelector("#quiz-title > span")
console.log(newWhat.innerText)
newWhat.innerText = 'tomato'
console.log(newWhat)

console.log(quizColors[1].name)
newWhat.innerText = quizColors[1].name


// Test - insert a new color-name into card
const newValue = document.querySelector('.cards div')
console.log(newValue)

console.log(document.getElementsByTagName("div"[1]))
const newBox = document.querySelector('.cards')
document.querySelector('#card1').value="baby"
console.log(document.querySelector('#card1'))

// Test - insert a new pic -> not relevant anymore - just colors-game
const newPic = document.querySelector('img').setAttribute('src', 'https://images.unsplash.com/photo-1552757158-788e68d046dc?')

// Test - set a new color
const newCard11 = document.querySelector('#card1')
newCard11.style.backgroundColor = quizColors[2].bcolor;
newCard11.value = 'bb'
console.log(newCard11.style.backgroundColor)
console.log(quizColors[5].bcolor)
console.log(newCard11)
console.log(newCard11.value)
*/

/* Test - various ways to measure clicks

1) if html has : <div id="card1" onclick="clickFunction()">
2) document.querySelector('#card1').onclick = clickFunction; or = function () {console.log('click');}

function clickFunction() {
console.log('click');
}
*/

/*
document.querySelector('#card1').addEventListener('click', clickFunction1);
function clickFunction1() {
    console.log('click');
}
*/