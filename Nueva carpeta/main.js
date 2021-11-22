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

const productos = [{
    nombre: "Jeresy Bulls",
    tag: "bulls",
    precio: 2000,
    enCarrito: 0
},

{
    nombre: "Bulls Altern.",
    tag: "bullsAlt",
    precio: 1000,
    enCarrito: 0
},

{
    nombre: "Jeresy Lakers",
    tag: "lakers",
    precio: 2000,
    enCarrito: 0
},

{
    nombre: "Jeresy Spurs",
    tag: "spurs",
    precio: 2000,
    enCarrito: 0
},
{
    nombre: "Jeresy Pistons",
    tag: "pistons",
    precio: 500,
    enCarrito: 0
},

{
    nombre: "Jeresy Philly",
    tag: "philly",
    precio: 500,
    enCarrito: 0
},

{
    nombre: "Jeresy Raptors",
    tag: "raptors",
    precio: 300,
    enCarrito: 0
},

{
    nombre: "Jeresy Suns",
    tag: "suns",
    precio: 300,
    enCarrito: 0
},
]
for (let i = 0; i < carrito.length; i++) {
    carrito[i].addEventListener("click", () => {
        cartNumbers(productos[i]);
        costoTotal(productos[i])
    })
}
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers")
    if (productNumbers) { document.querySelector(".cart span").textContent = productNumbers }
}

function cartNumbers(producto) {
    // console.log(" a vergaston ", producto)
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

    setItem(producto);
}

   function setItem(producto){
let cartItems = localStorage.getItem("productsInCart")
cartItems =JSON.parse(cartItems)
// console.log("mis items son ", cartItems)


if (cartItems!=null){

     if( cartItems[producto.tag] == undefined) {
         cartItems= {
             ...cartItems,
             [producto.tag]:producto
            }
        }


    cartItems[producto.tag].enCarrito+=1;
}
else{
    producto.enCarrito = 1;
    cartItems={
    [producto.tag]:producto
}
}

localStorage.setItem("productsInCart", JSON.stringify (cartItems))
}

function costoTotal(producto){

    let costoTotal =localStorage.getItem("costoTotal")
// console.log ("Costo total es ", costoTotal)
;

console.log("el costo total es", costoTotal);
console.log(typeof costoTotal);

if (costoTotal != null){
    costoTotal = parseInt(costoTotal);
    localStorage.setItem("costoTotal", costoTotal+ producto.precio);
}

else {localStorage.setItem("costoTotal", producto.precio )}


}

function displayCart(){
let cartItems = localStorage.getItem("productsInCart");
cartItems=JSON.parse(cartItems);
// console.log(cartItems)
let containerProductos = document.querySelector(".productos");
let costoTotal =localStorage.getItem("costoTotal");

    // console.log ("A vergaston")

    //Agregar o quitar items desde el carrito linea 391
    //Tarjetas de items 
    if (cartItems && containerProductos) {
        containerProductos.innerHTML ="";
    Object.values(cartItems).map(item =>{
        containerProductos.innerHTML+= `
        
        <div class="producto" >
        <ion-icon name="close-circle"></ion-icon>
        <img src="./assets/${item.tag}.png">
        <span>${item.nombre}</span>
        </div>  


        <div class=precio>$${item.precio}</div>

    
        <div class=cantidad>
        <ion-icon name="remove-circle"></ion-icon>
        ${item.enCarrito}
        <ion-icon name="add-circle"></ion-icon>
        </div>


        <div class=total >$${item.enCarrito * item.precio }.00</div>
        `
        
    });

    containerProductos.innerHTML += 
    `<div class=containerSumaTotal>
     <h4 class= textoSuma>
     Total Productos    
     </h4>
     
     <h4 sumaProductos> 
     $${costoTotal},00 </h4>        
     </div>
     `


}
}


onLoadCartNumbers();
displayCart();