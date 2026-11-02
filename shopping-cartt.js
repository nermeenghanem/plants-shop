let toatalPrice = 0;
let toatalItems = 0;
let GrTotal = 0;

let GTotal = 0;
let tQty = 0;
let sp3 = document.querySelector(".sp3");
let sizess = document.querySelector(".sizess");

let SMLL = document.querySelectorAll(".SMLL");




function drawProductsUI() {


    let tbody = document.querySelector(".tbody");
    let iitems = JSON.parse(localStorage.getItem("productsInCart"));


    let idProdduct = iitems.map((ittem) => {

        toatalPrice = `${ittem.price}` * `${ittem.qty}`;
        GTotal += parseInt(`${toatalPrice}`);
        tQty += parseInt(`${ittem.qty}`);
        sp3.innerText = tQty;
        localStorage.setItem("sp3", JSON.stringify(tQty));

        console.log(ittem);
        console.log(toatalPrice);
        tbody.innerHTML += `<tr class="AddItem">
        <td class="Items"><img src="${ittem.imgSrc}"> 
        
        <span class="names">${ittem.name}</span></td>

         
        <td class="QNTTY">
            <div class="decrincr"><span class="decr" onclick="decrItems(${ittem.id})">-</span><span class="nob" data-instock="${ittem.instock}">${ittem.qty}</span><span class="incr" onclick="incrItems(${ittem.id})">+</span></div>
        </td>
        <td class="ssprice">${ittem.price} $ </td>
        <td><span class="tprice">${toatalPrice}</span><span class="sign">$</span></td>
        <td class="trash"><div onclick="removeFromCart(${ittem.id})"><i class="fas fa-trash-alt" ></i></div></td>

        </tr>
    `


    })

    tbody.innerHTML += `
    <tr class="foott">

    <td class="TotalPrice">Total Price</td>
    <td> <span class="GTotal">${GTotal}</span><span class="signg">$</span></td>
   
    </tr>

    <tr class="foott2">

    <td class="TotalQ">Total QTY</td>
    <td class="TotalQty">${tQty}</td>
    
    </tr>


    `
    if (iitems.length == 0) {
        tbody.innerHTML = "";
        let NoItemsAdded = `<div class="NoItemsAdded">There are No Items Added!!</div>`;
        localStorage.setItem("NoItemsAdded", JSON.stringify(NoItemsAdded));
        tbody.innerHTML = JSON.parse(localStorage.getItem("NoItemsAdded"));

        sp3.innerText = 0;
        localStorage.setItem("sp3", JSON.stringify(tQty));


    }
    let sizess = document.querySelector(".sizess");
    let SMLL = document.querySelectorAll(".SMLL");

    SMLL.forEach(function(smal) {
        smal.addEventListener("click", function setEffect(e) {
            for (var m = 0; m < SMLL.length; m++) {
                localStorage.setItem("color", "rgb(50, 100, 62)");
                localStorage.setItem("colorr", "");
                if (localStorage.getItem("color"),
                    ("colorr")) {
                    console.log(localStorage.getItem("color"),
                        ("colorr"));
                    e.target.parentElement.children[m].style.backgroundColor = localStorage.getItem("colorr");
                    e.target.style.backgroundColor = localStorage.getItem("color");
                    e.target.style.borderColor = localStorage.getItem("color");
                }
            }



        })


    })

}

drawProductsUI();




function incrItems(id) {


    let targetItem = addedItem.find((it) => it.id == id);

    console.log(targetItem);
    if (targetItem.qty == targetItem.instock) {
        targetItem.qty = targetItem.instock;
    } else {
        targetItem.qty += 1;
    }

    console.log(targetItem.qty);
    console.log(targetItem.price);

    localStorage.setItem("productsInCart", JSON.stringify(addedItem));
    let prodCart = JSON.parse(localStorage.getItem("productsInCart"));
    console.log(prodCart);


    let tbody = document.querySelector(".tbody");
    tbody.innerHTML = "";
    GTotal = 0;
    tQty = 0;
    let iProduct = prodCart.map((prodCar) => {

        toatalPrice = `${prodCar.price}` * `${prodCar.qty}`;
        GTotal += parseInt(`${toatalPrice}`);
        tQty += parseInt(`${prodCar.qty}`);
        sp3.innerText = tQty;
        localStorage.setItem("sp3", JSON.stringify(tQty));


        tbody.innerHTML += `<tr class="AddItem">
        <td class="Items"><img src="${prodCar.imgSrc}"> 
        
        <span class="names">${prodCar.name}</span></td>

        
        <td class="QNTTY">
            <div class="decrincr"><span class="decr" onclick="decrItems(${prodCar.id})">-</span><span class="nob" data-instock="${prodCar.instock}">${prodCar.qty}</span><span class="incr" onclick="incrItems(${prodCar.id})">+</span></div>
        </td>
        <td class="ssprice">${prodCar.price} $ </td>
        <td><span class="tprice">${toatalPrice}</span><span class="sign">$</span></td>
        <td class="trash"><div onclick="removeFromCart(${prodCar.id})"><i class="fas fa-trash-alt" ></i></div></td>

        </tr>

    `
    })

    tbody.innerHTML += `
    <tr class="foott">

    <td class="TotalPrice">Total Price</td>
    <td> <span class="GTotal">${GTotal}</span><span class="signg">$</span></td>
    
    </tr>

    <tr class="foott2">

    <td class="TotalQ">Total QTY</td>
    <td class="TotalQty">${tQty}</td>
    
    </tr>

    `


    let sizess = document.querySelector(".sizess");

    let SMLL = document.querySelectorAll(".SMLL");


    SMLL.forEach(function(smal) {
        smal.addEventListener("click", function setEffect(e) {
            for (var m = 0; m < SMLL.length; m++) {



                localStorage.setItem("color", "rgb(50, 100, 62)");
                localStorage.setItem("colorr", "");

                if (localStorage.getItem("color"),
                    ("colorr")) {
                    console.log(localStorage.getItem("color"),
                        ("colorr"));
                    e.target.parentElement.children[m].style.backgroundColor = localStorage.getItem("colorr");
                    e.target.style.backgroundColor = localStorage.getItem("color");
                    e.target.style.borderColor = localStorage.getItem("color");
                }
            }



        })


    })

}



function decrItems(id) {

    let targetItem = addedItem.find((it) => it.id == id);
    console.log(targetItem);
    if (targetItem) {
        if (targetItem.qty == 1) {
            targetItem.qty = 1;
        } else {
            targetItem.qty--;
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(addedItem));
    let proCart = JSON.parse(localStorage.getItem("productsInCart"));
    console.log(proCart);


    let tbody = document.querySelector(".tbody");
    tbody.innerHTML = "";
    GTotal = 0;
    tQty = 0;

    let iProduct = proCart.map((proCar) => {

        toatalPrice = `${proCar.price}` * `${proCar.qty}`;
        GTotal += parseInt(`${toatalPrice}`);
        tQty += parseInt(`${proCar.qty}`);
        sp3.innerText = tQty;
        localStorage.setItem("sp3", JSON.stringify(tQty));

        tbody.innerHTML += `<tr class="AddItem">
            <td class="Items"><img src="${proCar.imgSrc}"> 
            
            <span class="names">${proCar.name}</span></td>

            
            <td class="QNTTY">
                <div class="decrincr"><span class="decr" onclick="decrItems(${proCar.id})">-</span><span class="nob" data-instock="${proCar.instock}">${proCar.qty}</span><span class="incr" onclick="incrItems(${proCar.id})">+</span></div>
            </td>
            <td class="ssprice">${proCar.price} $ </td>
            <td><span class="tprice">${toatalPrice}</span><span class="sign">$</span></td>
            <td class="trash"><div onclick="removeFromCart(${proCar.id})"><i class="fas fa-trash-alt" ></i></div></td>

            </tr>

        `


    })

    tbody.innerHTML += `
        <tr class="foott">
    
        <td class="TotalPrice">Total Price</td>
        <td> <span class="GTotal">${GTotal}</span><span class="signg">$</span></td>
        
    </tr>

    <tr class="foott2">

    <td class="TotalQ">Total QTY</td>
    <td class="TotalQty">${tQty}</td>
    
    </tr>
    
    
    `
    let sizess = document.querySelector(".sizess");

    let SMLL = document.querySelectorAll(".SMLL");

    SMLL.forEach(function(smal) {
        smal.addEventListener("click", function setEffect(e) {
            for (var m = 0; m < SMLL.length; m++) {



                localStorage.setItem("color", "rgb(50, 100, 62)");
                localStorage.setItem("colorr", "");

                if (localStorage.getItem("color"),
                    ("colorr")) {
                    console.log(localStorage.getItem("color"),
                        ("colorr"));
                    e.target.parentElement.children[m].style.backgroundColor = localStorage.getItem("colorr");
                    e.target.style.backgroundColor = localStorage.getItem("color");
                    e.target.style.borderColor = localStorage.getItem("color");
                }
            }



        })


    })



}


function removeFromCart(id) {
    let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
    let filteredItems = productsInCart.filter(productInCart => productInCart.id !== id);
    localStorage.setItem("productsInCart", JSON.stringify(filteredItems));
    let tbody = document.querySelector(".tbody");


    tbody.innerHTML = "";
    GTotal = 0;
    tQty = 0;
    let ffff = filteredItems.map((filteredItem) => {

        toatalPrice = `${filteredItem.price}` * `${filteredItem.qty}`;
        GTotal += parseInt(`${toatalPrice}`);
        tQty += parseInt(`${filteredItem.qty}`);


        sp3.innerText = tQty;
        localStorage.setItem("sp3", JSON.stringify(tQty));

        tbody.innerHTML += `
        <tr class="AddItem">
        <td class="Items"><img src="${filteredItem.imgSrc}"> 
        
        <span class="names">${filteredItem.name}</span></td>

        
        <td class="QNTTY">
            <div class="decrincr"><span class="decr" onclick="decrItem(${filteredItem.id})">-</span><span class="nob"  data-instock="${filteredItem.instock}">${filteredItem.qty}</span><span class="incr"  onclick="incrItem(${filteredItem.id})">+</span></div>
        </td>
        <td class="ssprice">${filteredItem.price} $</td>
        <td><span class="tprice">${toatalPrice}</span><span class="sign">$</span></td>
        
        <td class="trash"><div onclick="removeFromCart(${filteredItem.id})"><i class="fas fa-trash-alt" ></i></div></td>

        </tr>

    `
    })
    tbody.innerHTML += `
    <tr class="foott">

    <td class="TotalPrice">Total Price</td>
    <td> <span class="GTotal">${GTotal}</span><span class="signg">$</span></td>
    
    </tr>

    <tr class="foott2">

    <td class="TotalQ">Total QTY</td>
    <td class="TotalQty">${tQty}</td>
    
    </tr>

    `

    let sizess = document.querySelector(".sizess");

    let SMLL = document.querySelectorAll(".SMLL");

    SMLL.forEach(function(smal) {
        smal.addEventListener("click", function setEffect(e) {
            for (var m = 0; m < SMLL.length; m++) {



                localStorage.setItem("color", "rgb(50, 100, 62)");
                localStorage.setItem("colorr", "");

                if (localStorage.getItem("color"),
                    ("colorr")) {
                    console.log(localStorage.getItem("color"),
                        ("colorr"));
                    e.target.parentElement.children[m].style.backgroundColor = localStorage.getItem("colorr");
                    e.target.style.backgroundColor = localStorage.getItem("color");
                    e.target.style.borderColor = localStorage.getItem("color");
                }
            }



        })


    })



    if (filteredItems.length == 0) {
        tbody.innerHTML = "";
        let NoItemsAdded = `<div class="NoItemsAdded">There are No Items Added!!</div>`;
        localStorage.setItem("NoItemsAdded", JSON.stringify(NoItemsAdded));
        tbody.innerHTML = JSON.parse(localStorage.getItem("NoItemsAdded"));

        sp3.innerText = 0;
        localStorage.setItem("sp3", JSON.stringify(tQty));

    }
    console.log(filteredItems);
    localStorage.setItem("NoItemsAdded", JSON.stringify(NoItemsAdded));
    tbody.innerHTML = JSON.parse(localStorage.getItem("NoItemsAdded"));





}


function incrItem(id) {
    let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
    console.log(productsInCart);
    let targetItem = productsInCart.find((it) => it.id == id);
    console.log(targetItem);
    if (targetItem.qty == targetItem.instock) {
        targetItem.qty = targetItem.instock;
    } else {
        targetItem.qty += 1;
    }

    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
    let proCartt = JSON.parse(localStorage.getItem("productsInCart"));

    let tbody = document.querySelector(".tbody");
    tbody.innerHTML = "";
    GTotal = 0;
    tQty = 0;
    let iProduct = proCartt.map((prodCar) => {

        toatalPrice = `${prodCar.price}` * `${prodCar.qty}`;
        GTotal += parseInt(`${toatalPrice}`);
        tQty += parseInt(`${prodCar.qty}`);
        sp3.innerText = tQty;
        localStorage.setItem("sp3", JSON.stringify(tQty));



        tbody.innerHTML += `<tr class="AddItem">
        <td class="Items"><img src="${prodCar.imgSrc}"> 
        
        <span class="names">${prodCar.name}</span></td>

       
        <td class="QNTTY">
            <div class="decrincr"><span class="decr" onclick="decrItem(${prodCar.id})">-</span><span class="nob" data-instock="${prodCar.instock}">${prodCar.qty}</span><span class="incr" onclick="incrItem(${prodCar.id})">+</span></div>
        </td>
        <td class="ssprice">${prodCar.price} $ </td>
        <td><span class="tprice">${toatalPrice}</span><span class="sign"> $</span></td>
        <td class="trash"><div onclick="removeFromCart(${prodCar.id})"><i class="fas fa-trash-alt" ></i></div></td>

        </tr>

    `


    })

    tbody.innerHTML += `
    <tr class="foott">
    <td class="TotalPrice">Total Price</td>
    <td> <span class="GTotal">${GTotal}</span><span class="signg">$</span></td>
    </tr>

    <tr class="foott2">

    <td class="TotalQ">Total QTY</td>
    <td class="TotalQty">${tQty}</td>
    
    </tr>



`

    let sizess = document.querySelector(".sizess");

    let SMLL = document.querySelectorAll(".SMLL");

    SMLL.forEach(function(smal) {
        smal.addEventListener("click", function setEffect(e) {
            for (var m = 0; m < SMLL.length; m++) {



                localStorage.setItem("color", "rgb(50, 100, 62)");
                localStorage.setItem("colorr", "");

                if (localStorage.getItem("color"),
                    ("colorr")) {
                    console.log(localStorage.getItem("color"),
                        ("colorr"));
                    e.target.parentElement.children[m].style.backgroundColor = localStorage.getItem("colorr");
                    e.target.style.backgroundColor = localStorage.getItem("color");
                    e.target.style.borderColor = localStorage.getItem("color");
                }
            }



        })


    })

}

function decrItem(id) {
    let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
    console.log(productsInCart);
    let targetItem = productsInCart.find((it) => it.id == id);
    console.log(targetItem);
    if (targetItem) {
        if (targetItem.qty == 1) {
            targetItem.qty = 1;
        } else {
            targetItem.qty--;
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
    let proCartt = JSON.parse(localStorage.getItem("productsInCart"));

    let tbody = document.querySelector(".tbody");
    tbody.innerHTML = "";
    GTotal = 0;
    tQty = 0;
    let iProduct = proCartt.map((prodCar) => {

        toatalPrice = `${prodCar.price}` * `${prodCar.qty}`;
        GTotal += parseInt(`${toatalPrice}`);
        tQty += parseInt(`${prodCar.qty}`);
        sp3.innerText = tQty;
        localStorage.setItem("sp3", JSON.stringify(tQty));


        tbody.innerHTML += `<tr class="AddItem">
        <td class="Items"><img src="${prodCar.imgSrc}"> 
        
        <span class="names">${prodCar.name}</span></td>

        
        <td class="QNTTY">
            <div class="decrincr"><span class="decr" onclick="decrItem(${prodCar.id})">-</span><span class="nob" data-instock="${prodCar.instock}">${prodCar.qty}</span><span class="incr" onclick="incrItem(${prodCar.id})">+</span></div>
        </td>
        <td class="ssprice">${prodCar.price}$ </td>
        <td><span class="tprice">${toatalPrice}</span><span class="sign">$</span></td>
        <td class="trash"><div onclick="removeFromCart(${prodCar.id})"><i class="fas fa-trash-alt" ></i></div></td>

        </tr>

    `

    })

    tbody.innerHTML += `
    <tr class="foott">

    <td class="TotalPrice">Total Price</td>
    <td> <span class="GTotal">${GTotal}</span><span class="signg">$</span></td>
   


    <tr class="foott2">

    <td class="TotalQ">Total QTY</td>
    <td class="TotalQty">${tQty}</td>
    
    </tr>


    `
    let sizess = document.querySelector(".sizess");

    let SMLL = document.querySelectorAll(".SMLL");

    SMLL.forEach(function(smal) {
        smal.addEventListener("click", function setEffect(e) {
            for (var m = 0; m < SMLL.length; m++) {



                localStorage.setItem("color", "rgb(50, 100, 62)");
                localStorage.setItem("colorr", "");

                if (localStorage.getItem("color"),
                    ("colorr")) {
                    console.log(localStorage.getItem("color"),
                        ("colorr"));
                    e.target.parentElement.children[m].style.backgroundColor = localStorage.getItem("colorr");
                    e.target.style.backgroundColor = localStorage.getItem("color");
                    e.target.style.borderColor = localStorage.getItem("color");
                }
            }



        })


    })
}






/*

let itemTprice = document.querySelectorAll(".tprice").innerText;
let itemprice = document.querySelectorAll(".ssprice").innerText;
let itemqty = document.querySelectorAll(".nob").innerText;

function Itp() {
    itemTprice = itemprice * itemqty;
}

Itp();


let incQr = document.querySelectorAll(".incr");

let decQr = document.querySelectorAll(".decr");

let nob = document.querySelectorAll(".nob");

let decrincr = document.querySelectorAll(".decrincr");



let iitems = JSON.parse(localStorage.getItem("productsInCart"));
console.log(iitems);

let productsInCarts = JSON.parse(localStorage.getItem("productsInCart"));
console.log(productsInCarts);



for (var i = 0; i < incQr.length; i++) {

    let irr = incQr[i];


    let reff = irr.onclick = function helloo(e) {
        prevtarget = e.target.previousSibling.innerText;

        if (e.target.previousSibling.innerText == e.target.previousSibling.getAttribute("data-instock")) {
            e.target.previousSibling.innerText == e.target.previousSibling.getAttribute("data-instock")
        } else {
            e.target.previousSibling.innerText++
        }

        console.log(e.target.previousSibling.innerText);


    }



}



for (var j = 0; j < decQr.length; j++) {

    let jrr = decQr[j];

    let ress = jrr.onclick = function hii(e) {

        if (e.target.nextSibling.innerText == 1) {
            e.target.nextSibling.innerText = 1
        } else {
            e.target.nextSibling.innerText--;
        }
        console.log(e.target.nextSibling.innerText);
    }



}
*/