
const input = document.querySelector('input[type="file"]')
input.addEventListener('change', function(e){
  //  console.log(input.files)
const reader = new FileReader()
reader.onload = function(){
    const img = new Image()
    img.src = reader.result
    document.body.appendChild(img)
}
    reader.readAsDataURL(input.files[0])
}, false)