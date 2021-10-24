
let form = document.querySelector('form');
let topTextInput = document.querySelector('#top-text');
let bottomTextInput = document.querySelector('#bottom-text');
let memeContainer = document.querySelector('#meme-container');
let imageData = document.querySelector('#image-url');

//random color
const h1 = document.querySelector('h1');
function random(){
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`
}
// style title
const letters = document.querySelectorAll('.letter');
setInterval(() => {
for(let letter of letters){
	letter.style.color = random();
	}
}, 750);

//listen for form submission
form.addEventListener('submit', e => {
	e.preventDefault();
	createMeme();
	form.reset();
});

createMeme = () => {
	let newDiv = document.createElement('div');
	let newTopTextInput = document.createElement('div');
	let newBottomTextInput = document.createElement('div');
	let newImage = document.createElement('img');
	
	memeContainer.append(newDiv); 
	newDiv.classList.add('newContainerInput');
	// add Image
	newDiv.append(newImage);
	newImage.setAttribute('src', `${imageData.value}`);

	// add Top Text
	newDiv.append(newTopTextInput);
	newTopTextInput.classList.add('newTopTextInput');
	newTopTextInput.innerText = `${topTextInput.value}`;
	// add Bottom Text
	newDiv.append(newBottomTextInput);
	newBottomTextInput.classList.add('newBottomTextInput');
	newBottomTextInput.innerText = `${bottomTextInput.value}`;
	
	newDiv.append('deleteBtn');
}

// delete meme
memeContainer.addEventListener('click', e => {
	e.target.parentElement.remove();
});