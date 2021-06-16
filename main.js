console.log(document)

let randomOf3Cards = Math.floor(Math.random() * 3 + 1);
console.log(randomOf3Cards)

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



// insert a new color-name to look for
const newWhat = document.querySelector("#quiz-title > span")
console.log(newWhat.innerText)
newWhat.innerText = 'tomato'
console.log(newWhat)

console.log(quizColors[1].name)
newWhat.innerText = quizColors[1].name

// insert a new color-name into card
const newValue = document.querySelector('.cards div')
console.log(newValue.value)

console.log(document.getElementsByTagName("div"[1]))
const newBox = document.querySelector('.cards')
console.log(newBox.classList)

//insert a new pic
const newPic = document.querySelector('img').setAttribute('src', 'https://images.unsplash.com/photo-1552757158-788e68d046dc?')


//game - to see a word & guess the correct pic out of 3

//1) random choice of 3 objects colors(pics)-words out of source
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
    console.log(newArr);
};
//console.log(newArr);
console.log(shuffleColors(quizColors));

console.log(shuffleColors(quizColors));

//2) random placement of those three colors(pics) on three cards-places
const newCard1 = document.querySelector('#card1')
newCard1.style.backgroundColor = quizColors[0].bcolor;
console.log(newCard1.style.backgroundColor)
console.log(quizColors[5].bcolor)
//3) random choice of 1 word from those three to display as quiz-word

    let randomColor = Math.floor(Math.random() * 3 + 1);
console.log(randomColor)
console.log(randomColor)

//4-right) if player clicks on the correct pic -> its border turns green, score++ -> in a moment game step 1)
/* 
1) if html has : <div id="card1" onclick="clickFunction()">
2) document.querySelector('#card1').onclick = clickFunction; or = function () {console.log('click');}

function clickFunction() {
console.log('click');
}
*/

document.querySelector('#card1').addEventListener('click', clickFunction);

function clickFunction() {
    console.log('click');

}
//4-wrong) not correct pic -> its border turns red