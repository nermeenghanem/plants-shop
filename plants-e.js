window.onload=function(){
    if(!window.location.hash){
        window.location=window.location +"#loaded";
        window.location.reload();
    }
}
    
    
    
    let produtDb = document.querySelectorAll(".row3");
    let producttss = JSON.parse(localStorage.getItem("Products"));

    console.log(producttss);



    producttss.forEach(function(product) {

        produtDb.forEach(function(re) {
            re.innerHTML += `
            <div class="pro hi " data-filter =${product.category}  item-filter =${product.filter}>
        

                <div class="info">
                    <div class="cart" onclick="shoppingCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart</div>
                    <div class="show" onclick="saveData(${product.id})"  >Show Details</div>
                </div>
                <div class="prod"> </div>
                <img src="${product.imgSrc}">
                <p class="name">${product.name}</p>
                <span class="price">${product.price} $</span><span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
            </div>       
            `
        });
        console.log(product.category);



    });



    let cart = document.querySelector(".sp2");
    let shopcart = document.querySelector(".row9");
    
    
    cart.addEventListener('click', function() {
    
        shopcart.classList.toggle("activate");
    
    });
    
    
    
    
    let ttogs = document.querySelectorAll(" .ttog");
    let hmBtns = document.querySelectorAll(".hum-btn");
    
    hmBtns.forEach((hmBtn) => {
        hmBtn.onclick =
    
            function() {
                ttogs.forEach((ttog) => {
                    ttog.classList.toggle("accttivvee");
    
                })
            }
    
    })





function filterItem(value) {
    let itemNames = document.querySelectorAll(".itemname");

    itemNames.forEach(function(iname) {


        if (iname.innerText == value) {

            iname.style.backgroundColor = "rgb(50, 100, 62)";

        } else {
            iname.style.backgroundColor = "";
        }


        document.querySelector(iname.dataset.section).scrollIntoView({
            behavior: "smooth",
            block: "start"

        });
        aut.classList.remove("sideb");
        roww.classList.remove("opac");

    });

    let elements = document.querySelectorAll(".pro");

    elements.forEach((element) => {


        if (element.getAttribute("item-filter") == value) {


            element.classList.remove("hide");
        } else {
            console.log("yyy");
            element.classList.add("hide");
        }





    });
    console.log(elements.length);






}


function filterProduct(value) {
    let TopNewBest = document.querySelectorAll(".TopNewBest");

    TopNewBest.forEach(function(tnb) {


        if (tnb.innerText == value) {

            tnb.style.opacity = .4;

        } else {
            tnb.style.opacity = 1;
        }

    });

    let elements = document.querySelectorAll(".pro");

    elements.forEach((element) => {


        if (element.getAttribute("data-filter") == value) {


            element.classList.remove("hide");
        } else {
            console.log("yyy");
            element.classList.add("hide");
        }
    })


};



const btn = document.querySelectorAll(".show");


function saveData(id) {

    localStorage.setItem("productId", id);
    
    window.location.href = 'product-descriptions.html.html';
    

}


    
    

    




quantity = document.querySelectorAll(".no");

let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

function shoppingCart(id) {

    console.log(id);
    window.location.href = "shopingcart.html.html";

    let choosenItem = producttss.find((item) => item.id == id);

    let notexistingitem = addedItem.find((i) => choosenItem.id == i.id);

    if (notexistingitem) {
        if (notexistingitem.qty == notexistingitem.instock) {
            notexistingitem.qty = notexistingitem.instock;
        } else {

            notexistingitem.qty += 1;
        }
    } else {
        addedItem.push(choosenItem);
    }

    addedItem = [...addedItem];

    localStorage.setItem("productsInCart", JSON.stringify(addedItem));




}






let img = document.querySelectorAll(".images img");

let sec = document.getElementById("section1");

let images = document.getElementById("imags");

let slide = document.querySelector(".slider");
let span = document.querySelectorAll(".bullet");







    
    
    let imgs = Array.from(img);

    const imglength = imgs.length;
    
    console.log(imglength);
    
    console.log(imgs);
    
    
    let bullets = Array.from(span);
    console.log(bullets);
    
    //loop through all bullets Items
    
    
    
    //Buttons
    
    
    
    
    
    
    let size = img[1].clientWidth;
    console.log(size);
    let sizee = images.clientWidth;
    console.log(sizee);
    let head = document.querySelector(".header");
    let friday = document.querySelector(".friday");
    
    
    
    //Counter
    let counter = 1;
    
    bullets.forEach(function(bullit) {
        bullit.classList.remove("active");
    });
    
    slide.children[counter - 1].classList.add("active");
    
    
    
    
    function trans() {
    
    
        images.style.transition = 'transform .4s  ease-in';
    
    
        images.style.transform = 'translateX(' + (-size * counter) +
            'px)';
    
        counter++;
        bullets.forEach(function(bullit) {
            bullit.classList.remove("active");
        });
    
        slide.children[counter - 1].classList.add("active");
    
    
        if (counter >= imgs.length) {
            counter = 0;
        }
    
    };
    
    setInterval(function() { trans() }, 2000);
    
    
    for (var i = 0; i < bullets.length; i++) {
        bullets[i].onclick = function() {
            counter = parseInt(this.getAttribute('data-index'));
    
            images.style.transition = 'transform .4s  ease-in';
    
            images.style.transform = 'translateX(' + (-size * counter) +
                'px)';
    
            counter++;
            bullets.forEach(function(bullit) {
                bullit.classList.remove("active");
            });
    
            slide.children[counter - 1].classList.add("active");
    
            if (counter >= imgs.length) {
                counter = 0;
            }
        }
    }






    /*

another solution:

for (var i = 0; i < btn.length; i++) {
    let cartBtn = btn[i];

    cartBtn.addEventListener("click", function itemData(e) {



        const srcImg = e.target.parentElement.parentElement.children[2].src;
        const srcName = e.target.parentElement.parentElement.children[3].innerText;
        const srcPrice = e.target.parentElement.parentElement.children[4].innerText;

        localStorage.setItem("sImg", srcImg);
        localStorage.setItem("sName", srcName);
        localStorage.setItem("sPrice", srcPrice);

        console.log(srcPrice);
        console.log(srcImg);
        console.log(srcName);
    });



    cartBtn.addEventListener("click", function Data() {

        window.location.href = "Product-descriptions.html";
    });
}

*/
