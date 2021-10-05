// const topTextInput = document.querySelector('#topTextInput')
// const bottomTextInput = document.querySelector('#bottomTextInput')
// const canvas = document.querySelector('#meme')
// const input = document.querySelector("#imageFileInput");
// const input = document.querySelector('input[type="file"]')
// const img = new Image();
// input.addEventListener('change', function(e){

// const reader = new FileReader()
// reader.onload = function(){
    
//      img.src = reader.result;
//     document.body.appendChild(img);
//     updateMemeCanvas(topTextInput.value, bottomTextInput.value,canvas, img);
// }
//     reader.readAsDataURL(input.files[0])
// }, false)


// let img;

// input.addEventListener("change", (e) => {
//   const imageDataUrl = URL.createObjectURL(e.target.files[0]);

//   img = new Image();
//   img.src = imageDataUrl;

//   img.addEventListener(
//     "load",
//     () => {
//       updateMemeCanvas(
//         topTextInput.value,
//         bottomTextInput.value,
//         canvas,
//         img
//       );
//     },
//     { once: true }
//   );
// });

// function updateMemeCanvas( topText, bottomText, canvas, img){
//   //set canvas to dimentions of image
//   const context = canvas.getContext('2d');
//   const height = img.height;
//   const width = img.width;
//   //scale text size
//   const fontSize = Math.floor(width /10);
//   // put some space above and below the text
//   const yOffset = height / 25;
  
//   // set  font text
//   context.textAlign = 'center';
//   context.fontSize =`${fontSize}px impact`;
//   context.strokestyle = 'black';
//   context.lineWidth = Math.floor(fontSize / 3);
//   context.fillStyle = 'white';

//   //update background with canvas size
//   context.drawImage(img, 0,0);
//   canvas.height = height;
//   canvas.width = width;

//   //add top text, pass it into the function
//   context.textBaseline = 'top';
//   context.strokeText(topText, width /2, yOffset);
//   context.fillText(topText, width / 2, height - yOffset);


//   // Add bottom text
//   context.textBaseline = "bottom";
//   context.strokeText(bottomText, width / 2, height - yOffset);
//   context.fillText(bottomText, width / 2, height - yOffset);
// }
// topTextInput.addEventListener("change", () => {
//   updateMemeCanvas( topTextInput.value, bottomTextInput.value. canvas, img);
// });

// bottomTextInput.addEventListener("change", () => {
//   updateMemeCanvas( topTextInput.value, bottomTextInput.value, canvas, img);
// });
// sample answers in 4.3 Javscripts Events - #10 logo maker Demo


// https://www.youtube.com/watch?v=io5FcMAdLyQ 09/
const topTextInput = document.querySelector("#top-text");
const bottomTextInput = document.querySelector("#bottom-text");
const imageFileInput = document.querySelector("#imageFileInput");
const canvas = document.querySelector("#meme");
let image;
const deleteButton = document.querySelector("#removeBtn");

topTextInput.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});

bottomTextInput.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});

deleteButton.addEventListener("click", () => {
canvas.remove();
})

imageFileInput.addEventListener("change", (e) => {
  const imageDataUrl = URL.createObjectURL(e.target.files[0]);

  image = new Image();
  image.src = imageDataUrl;

  image.addEventListener("load", () => {
      updateMemeCanvas(canvas, image, topTextInput.value,bottomTextInput.value);
    },);
});


function updateMemeCanvas(canvas, image, topText, bottomText) {
  const context = canvas.getContext("2d");
  const width = image.width;
  const height = image.height;
  const fontSize = Math.floor(width / 10);
  const yOffset = height / 25;
  

  // Update canvas background
  canvas.width = width;
  canvas.height = height;
  context.drawImage(image, 0, 0);

  //  set  font text
  context.strokeStyle = "black";
  context.lineWidth = Math.floor(fontSize / 4);
  context.fillStyle = "white";
  context.textAlign = "center";
  context.lineJoin = "round";
  context.font = `${fontSize}px impact`;

  // add top text, pass it into the function
  context.textBaseline = "top";
  context.strokeText(topText, width / 2, yOffset);
  context.fillText(topText, width / 2, yOffset);

  // Add bottom text
  context.textBaseline = "bottom";
  context.strokeText(bottomText, width / 2, height - yOffset);
  context.fillText(bottomText, width / 2, height - yOffset);
}
