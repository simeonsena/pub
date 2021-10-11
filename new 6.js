// Using document.createElement


const newDog = document.createElement('div')

 newDog.classList.add('dog')


 const myImage = document.createElement('img')
 myImage.src="https://picsum.photos/id/237/500/500";
 myImage.alt='Dog photo'

 const h2 = document.createElement('h2')
 h2.textContent = 'My name is Roviel and i love playing and eating.'

 const p = document.createElement('p')
 p.classList.add('moreInfo')


p.textContent= 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.,'

 const button = document.createElement('button')
 button.classList.add('btn')
 button.textContent= 'Click to read  more about me '


// //here we are appending the new element to the body of our html
 document.body.appendChild(newDog)
 newDog.appendChild(myImage)
 newDog.appendChild(h2)
 newDog.appendChild(p)
 newDog.appendChild(button)


 function showMore(){
//     // we are going to select the p tag with a class of info. we use querySelector to search within the scope of that element children, to find what matches that query. with do 
//  // On click of the read more button, we want to change the button from display none to display block.
//     // we are going to display a random text about the dog.
    
   document.querySelector('.moreInfo').style.display ='block'

   
}

// // we are going to select the button with a class of btn and add an event listener  
document.querySelector('.btn').addEventListener('click', showMore)
