//Formulario de contacto

// let form = document.getElementsByTagName("form")[0];
// form.addEventListener("submit", () =>
// {alert("Recibido!");
// });

//Carrito

let carrito = document.querySelectorAll(".agregarCamiseta")

//Por que no toma el prevent default?
// $("#camiseta").on ("añadirCarrito", function(e){
// e.preventdefault();
// })


//Array Camisetas

const productos = [{
    nombre: "Jeresy Bulls",
    tag: "bulls",
    precio: 2000,
    enCarrito: 0
},

{
    nombre: "Jeresy Philly",
    tag: "philly",
    precio: 500,
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
    nombre: "Jeresy Raptors",
    tag: "raptors",
    precio: 300,
    enCarrito: 0
},

{
    nombre: "Bulls Altern.",
    tag: "bullsAlt",
    precio: 1000,
    enCarrito: 0
},

{
    nombre: "Jeresy Suns",
    tag: "suns",
    precio: 300,
    enCarrito: 0
},
]


//

for (let i = 0; i < carrito.length; i++) {
    carrito[i].addEventListener("click", () => {
        numeroIcono(productos[i]);
        costoTotal(productos[i])
    })
}
function onLoadnumeroIcono() {
    let cantidadProductos = localStorage.getItem("numeroIcono")
    if (cantidadProductos) { document.querySelector(".carritoNav span").textContent = cantidadProductos }
}

function numeroIcono(producto) {
    // console.log(" a vergaston ", producto)
    let cantidadProductos = localStorage.getItem("numeroIcono");

    cantidadProductos = parseInt(cantidadProductos);

    if (cantidadProductos) {
        localStorage.setItem("numeroIcono", cantidadProductos + 1);
        document.querySelector(".carritoNav span").textContent = cantidadProductos + 1;
    }
    else {
        localStorage.setItem("numeroIcono", 1);
        document.querySelector(".carritoNav span").textContent = 1;
    }

    setItem(producto);
}

function setItem(producto) {
    let cartItems = localStorage.getItem("arrayListaCarrito")
    cartItems = JSON.parse(cartItems)
    // console.log("mis items son ", cartItems)


    if (cartItems != null) {

        if (cartItems[producto.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [producto.tag]: producto
            }
        }


        cartItems[producto.tag].enCarrito += 1;
    }
    else {
        producto.enCarrito = 1;
        cartItems = {
            [producto.tag]: producto
        }
    }

    localStorage.setItem("arrayListaCarrito", JSON.stringify(cartItems))
}



function costoTotal(producto) {

    let costoTotal = localStorage.getItem("costoTotal")
        // console.log ("Costo total es ", costoTotal)
        ;

    console.log("el costo total es", costoTotal);
    console.log(typeof costoTotal);

    if (costoTotal != null) {
        costoTotal = parseInt(costoTotal);
        localStorage.setItem("costoTotal", costoTotal + producto.precio);
    }

    else { localStorage.setItem("costoTotal", producto.precio) }


}

function displaycarritoNav() {
    let cartItems = localStorage.getItem("arrayListaCarrito");
    cartItems = JSON.parse(cartItems);

    // console.log(cartItems)

    let containerProductos = document.querySelector(".productos");
    let costoTotal = localStorage.getItem("costoTotal");

    // console.log ("A vergaston")

    //Acomoda objetos en listita del cart

    if (cartItems && containerProductos) {
        containerProductos.innerHTML = "";
        Object.values(cartItems).map(item => {
            containerProductos.innerHTML += `
        
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


        <div class=total >$${item.enCarrito * item.precio}.00</div>
        `

        });

        //Total de todo el carrito

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



onLoadnumeroIcono();
displaycarritoNav();