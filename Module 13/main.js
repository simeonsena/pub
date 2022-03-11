// http://curric.rithmschool.com/springboard/lectures/jquery/
// https://www.youtube.com/embed/7nk9dUBqMD0?autoplay=1&showinfo=0&controls=1&rel=0
// https://www.youtube.com/embed/3ceLtkaY-fE?showinfo=0&controls=1&rel=0&autoplay=1
// https://www.youtube.com/embed/gmCMktAnkrY?showinfo=0&controls=1&rel=0&autoplay=1
// paste jquery ref in index.html
// to use - $()
// can get and select in a single 
$('h1').text('VOLCANO')
//can bulk or mass update with a single line
const $h1 = $('h1')


// traversal https://www.youtube.com/embed/KGtfuZ1AGz8?showinfo=0&controls=1&rel=0&autoplay=1
// select all then narrow down by passing in an index
$('li').eq(3)

// https://www.youtube.com/embed/nkqWWo3soY8?showinfo=0&controls=1&rel=0&autoplay=1
//creating elements
document.createElement('h1') //vanella JS
<h1></h1>// vanella js

//jquery
$('ul').append('<li class="highlight">I AM NEW</li>')
$('li').append('<input type="checkbox"/>')
$('li').prepend('<input type="checkbox"/>')

//create new elements
//new empty h1
$('h1')//this does a search for elements
$('<h1>')//this creates an element
$('<h1>HELLO!</h1>').css('color', 'orange')
$('<h1>HELLO!</h1>').css('color', 'orange').appendTo()

$('li').after('<bold>HI</>')
$('h1').remove()
$('img').remove()


//https://www.youtube.com/embed/m7q7Yu6dHzU?showinfo=0&controls=1&rel=0&autoplay=1
//events and delegation
$('img').click(function (){
    alert('Hello!')
})

$('img').on('mouseleave', function(){
    console.log("LEAVING AN IMAGE1")
})
$('img').on('mouseenter', function(){
    $(this).css('border', '10px solid purple') 
})
// https://www.springboard.com/workshops/software-engineering-career-track/learn#/curriculum/16964/16004
$('img').on('click', function(){
    // $(this).fadeOut(3000, function() {
    //     $(this).remove();
    // })
    $(this).animate({
        opacity : 0,
        width: '50px', //poor performance

    }, 3000, function(){
        $(this).remove();
    })
})

$('#add-input').on('click', function (){
    $('form').append('<input type="text"');
})
//EVENT DELEGATION
$('form').on('focus', 'input', function(){
    $(this).val('BAMBOOZLED')
})
 