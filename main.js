console.log(document)

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

// insert a new color-name to look for
const newWhat = document.querySelector("#quiz-title > span")
console.log(newWhat.innerText)
//newWhat.innerText = quiz-colors.name[0]
console.log(quizColors)
console.log(quiz.colors[0].name)


console.log(document.getElementsByTagName("div"[1]))
const newBox = document.querySelector('.cards')
console.log(newBox.classList)

//insert a new pic
const newPic = document.querySelector('img').setAttribute('src', 'https://images.unsplash.com/photo-1552757158-788e68d046dc?')


//game - to see a word & guess the correct pic out of 3

//1) random choice of 3 pairs colors(pics)-words out of source

//2) random placement of those three colors(pics) on three cards-places

//3) random choice of 1 word from those three to display as quiz-word

//4-right) if player clicks on the correct pic -> its border turns green, score++ -> in a moment game step 1)
//4-wrong) not correct pic -> its border turns red