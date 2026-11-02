let productts = JSON.parse(localStorage.getItem("Products"));
console.log(productts);

let productId = localStorage.getItem("productId"); 


let sp31 = document.querySelector(".sp3");
let tQty = 0;


sp31.innerText = JSON.parse(localStorage.getItem("sp3"))||0;




/*

another solution:

let Imgg = localStorage.getItem("sImg");
let Namee = localStorage.getItem("sName");
let pricee = localStorage.getItem("sPrice");
console.log(Imgg);
console.log(Namee);
console.log(pricee);

*/


let section12 = document.querySelector(".section12");

let idProduct = productts.find((item) =>
    item.id == productId);



console.log(idProduct);

section12.innerHTML =

    `
<div class="container">

<div class="row19">
    <div class="product-photo">
        <img class="hi" src="${idProduct.imgSrc}">
    </div>
    <div class="details">
        <div class="name">
            <h2 class="product-name">${idProduct.name}</h2>

        </div>

        <div class="pricig">
            <h4 class="Price">${idProduct.price} $</h4>
            <span class="star"><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span><span class="rating"></span>
            <span class="reviews"> ${idProduct.creview} Review</span></span>
        </div>

        <h4 class="short-description">Short description:</h4>
        <p class="disc">${idProduct.description} </p>

       

        <h4 class="QTY">In Stock:</h4>
        <div class="decinc"><span class="no">${idProduct.instock}</span></div>

        <button onclick="shoppingCart(${idProduct.id})">Add To Cart</button>

    </div>
</div>
</div>

`

let incQ = document.querySelectorAll(".inc");

let decQ = document.querySelectorAll(".dec");

let noQ = document.querySelectorAll(".no");

let decinc = document.querySelectorAll(".decinc");

let sizes = document.querySelector(".sizes");

let SML = document.querySelectorAll(".SML");

SML.forEach(function(smal) {
    smal.addEventListener("click", function(e) {
        for (var m = 0; m < SML.length; m++) {

            e.target.parentElement.children[m].classList.remove("bright");
            e.target.classList.add("bright");
        }

    })
})



var selecttext = document.querySelector(".sizesv").value;
localStorage.setItem("divitem", selecttext);








for (var i = 0; i < incQ.length; i++) {

    let ir = incQ[i];

    incQ[i].onclick = function hello(e) {
        if (e.target.previousSibling.innerText == `${idProduct.instock}`) {
            e.target.previousSibling.innerText == `${idProduct.instock}`
        } else {
            e.target.previousSibling.innerText++
        }
    }

}


for (var j = 0; j < decQ.length; j++) {

    let jr = decQ[j];

    decQ[j].onclick = function hi(e) {

        if (e.target.nextSibling.innerText == 1) {
            e.target.nextSibling.innerText = 1
        } else {
            e.target.nextSibling.innerText--;
        }
    }

}