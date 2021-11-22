//Formulario de contacto

// let form = document.getElementsByTagName("form")[0];
// form.addEventListener("submit", () =>
// {alert("Recibido!");
// });

//Carrito

let carrito = document.querySelectorAll(".add-cart")

//Por que no toma el prevent default?
// $("#camiseta").on ("añadirCarrito", function(e){
// e.preventdefault();
// })

const products = [{
    nombre: "Jeresy Bulls",
    tag: "bulls",
    precio: 2000,
    incCart: 0
},

{
    nombre: "Bulls Altern.",
    tag: "bullsAlt",
    precio: 1000,
    incCart: 0
},

{
    nombre: "Jeresy Lakers",
    tag: "lakers",
    precio: 2000,
    incCart: 0
},

{
    nombre: "Jeresy Spurs",
    tag: "spurs",
    precio: 2000,
    incCart: 0
},
{
    nombre: "Jeresy Pistons",
    tag: "pistons",
    precio: 500,
    incCart: 0
},

{
    nombre: "Jeresy Philly",
    tag: "philly",
    precio: 500,
    incCart: 0
},

{
    nombre: "Jeresy Raptors",
    tag: "raptors",
    precio: 300,
    incCart: 0
},

{
    nombre: "Jeresy Suns",
    tag: "suns",
    precio: 300,
    incCart: 0
},
]
for (let i = 0; i < carrito.length; i++) {
    carrito[i].addEventListener("click", () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers")
    if (productNumbers) { document.querySelector(".cart span").textContent = productNumbers }
}

function cartNumbers(product) {
    // console.log(" a vergaston ", product)
    let productNumbers = localStorage.getItem("cartNumbers");

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart span").textContent = 1;
    }

    setItem(product);
}

   function setItem(product){
let cartItems = localStorage.getItem("productsInCart")
cartItems =JSON.parse(cartItems)
// console.log("mis items son ", cartItems)


if (cartItems!=null){

     if( cartItems[product.tag] == undefined) {
         cartItems= {
             ...cartItems,
             [product.tag]:product
            }
        }


    cartItems[product.tag].incCart+=1;
}
else{
    product.incCart = 1;
    cartItems={
    [product.tag]:product
}
}

localStorage.setItem("productsInCart", JSON.stringify (cartItems))
}

function totalCost(product){

    let cartCost =localStorage.getItem("totalCost")
// console.log ("Costo total es ", cartCost)
;

console.log("el costo total es", cartCost);
console.log(typeof cartCost);

if (cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost+ product.precio);
}

else {localStorage.setItem("totalCost", product.precio )}


}

function displayCart(){
let cartItems = localStorage.getItem("productsInCart");
cartItems=JSON.parse(cartItems);
// console.log(cartItems)
let productContainer = document.querySelector(".products");
let cartCost =localStorage.getItem("totalCost");

    // console.log ("A vergaston")

    //Agregar o quitar items desde el carrito linea 391
    //Tarjetas de items 
    if (cartItems && productContainer) {
    productContainer.innerHTML ="";
    Object.values(cartItems).map(item =>{
        productContainer.innerHTML+= `
        
        <div class="product" >
        <ion-icon name="close-circle"></ion-icon>
        <img src="./assets/${item.tag}.png">
        <span>${item.nombre}</span>
        </div>  


        <div class=precio>$${item.precio}</div>

    
        <div class=cantidad>
        <ion-icon name="remove-circle"></ion-icon>
        ${item.incCart}
        <ion-icon name="add-circle"></ion-icon>
        </div>


        <div class=total >$${item.incCart * item.precio }.00</div>
        `
        
    });

    productContainer.innerHTML += 
    `<div class=containerSumaTotal>
     <h4 class= textoSuma>
     Total Productos    
     </h4>
     
     <h4 sumaProductos> 
     $${cartCost},00 </h4>        
     </div>
     `


}
}


onLoadCartNumbers();
displayCart();