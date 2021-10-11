//eventlistener listening for submit button
//margin top 5px tell css. use absolute position.
//image has to be handled by javascript
//input type url. JS is going to read the image. input.value = the url which genertes the image. 
//type input
//form.addeventlistenr >submit form.reset
//need to create a dynamic div with JS. form.addeventlistiner on submit button. 
//coud have a function that creates bottom and top to call parrent div. use class append /child to dynamically create html content.

// New Dynamic div
let newDiv = document.createElement('div');
newDiv.classList.add('imageClass');
const form = document.querySelector('#meme-form');

// prevent refresh
form.addEventListener('submit', e => {
    e.preventDefault();       
});

// delete button
const deleteBtn = document.createElement('button');
deleteBtn.classList.add('btn');
deleteBtn.textContent= 'Delete';


const getImage = document.getElementById("imageBtn").addEventListener("click", e => {
    let imageInput = document.getElementById("image-input");
    let image = document.getElementById("image");
    let topTextInput = document.querySelector('#top-text').value;
    let bottomTextInput = document.querySelector('#bottom-text').value;
     let topStyle = e.target;
topStyle.style.classList = topStyle.innerHTML;
   
    console.log(topTextInput);
    console.log(bottomTextInput);
    console.log(topStyle);
    

    if (imageInput.value) image.src = imageInput.value;
    
document.body.appendChild(newDiv);
newDiv.append(image);
newDiv.innerHTML+= topTextInput;
newDiv.innerHTML+= bottomTextInput;
newDiv.append(deleteBtn);

//document.body.appendChild(deleteBtn);
  
  });