// declaring or instatiating a variable from an id of the html element.
const pwd1 = document.querySelector("#pwd1");
const pwd2 = document.querySelector("#pwd2");
const fb = document.querySelector("#feedback");
//creating an event called focusout
pwd2.addEventListener('focusout',controlar)
function controlar(){
    console.log('inside the function')
    if(pwd1.value !== pwd2.vale){
       console.log('values donot match')
        fb.textContent ="values donot match.Try again"

    }else{
        console.log('values match')
    }
}