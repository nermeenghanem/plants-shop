let sp32 = document.querySelector(".sp3");
let tQty = 0;


sp32.innerText = JSON.parse(localStorage.getItem("sp3"))||0;
let roww = document.querySelector(".row19");
let gears = document.querySelector(".gear");
let aut = document.querySelector(".autoside-bar");


gears.onclick = function() {

    aut.classList.toggle("sideb");
    roww.classList.toggle("opac");
}