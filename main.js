console.log(document)

// insert a new quiz-word to look for
const newWhat = document.querySelector("#quiz-title > span")
console.log(newWhat.innerText)
newWhat.innerText = 'tomato'
console.log(newWhat)


console.log(document.getElementsByTagName("div"[1]))
const newBox = document.querySelector('.cards')
console.log(newBox.classList)

//insert a new pic
//const newPic = document.querySelector('img').setAttribute('src', 'https://images.unsplash.com/photo-1552757158-788e68d046dc?')


//game - to see a word & guess the correct pic out of 3

//1) random choice of 3 pairs colors(pics)-words out of source

//2) random placement of those three colors(pics) on three cards-places

//3) random choice of 1 word from those three to display as quiz-word

//4-right) if player clicks on the correct pic -> its border turns green, score++ -> in a moment game step 1)
//4-wrong) not correct pic -> its border turns red