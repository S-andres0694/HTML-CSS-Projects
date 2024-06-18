//creates a non-permanent array that stores the different colours that square can have
let colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "black", "white"];
//uses the document.getElementById to get the button created in the HTML
let button = document.getElementById("btn");
//When using the addEventListener method we declare 2 things, one the action which in this case is click and a function that determines the behaviour when
// it is clicked in this case being the selection of a random color in the array and choosing it to change the square
button.addEventListener('click', function() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let container = document.getElementById("container")
    container.style.backgroundColor = randomColor;
});