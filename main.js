// Clase 2
// let comidaFavorita = prompt("Cual es tu comida preferida?")
// if (comidaFavorita == "Pizza") {alert ("Sos un capo")
// }
// else if (comidaFavorita == "Pescado") {alert ("Me da impresion.")
// }
//  else {alert ("Tu comida preferida es " +comidaFavorita + ", no entendes nada")}

// let encuestaCliente =parseFloat(prompt("Cuanto pagarías por tu comida preferida"));

// if (encuestaCliente>1500) {alert("Estás loco");
// }
// else if (encuestaCliente>800) {alert("Buen precio");
// }
// else if (encuestaCliente>101) {alert("Un regalo");
// }
// else {alert("Ratón")}

// let esMenor100 = (encuestaCliente<101)
// if (esMenor100) {alert("Ratón!")}


//Clase 3
// let num = parseInt(prompt("Ingresa un numero"))
// for(let i =1; i <=10;i++) {let resultado = num*i;
// console.log(num+"X"+i*"="+resultado)
// }

// for (let i=1; i<10; i++) {
//     if (i == 8 ) {continue;
//     }
//     {console.log (i);
// }   }

// for (let i=1 ; i <=10; i++) {
//     let resultado = num*i;
//     console.log (num + "x" + i + "=" + resultado);
// }

// for (let i=1; i<=10; i++) {
//     if (i % 2 ==0){console.log(i + "es par")  ;
//     }
//     else {console.log (i + "es impar")}
// }

// let entrada = prompt ("Querés salir del bucle?");
// while (entrada!="si") {alert ("El usuario no quiere salir")}
// entrada= prompt ("Seguro?");


//NO SALE

// let pass = 1234;
// let dato = parseInt(prompt("ingrese su pass"));
// let intentos = 3;

// while ((dato != pass) && (intentos > 0)) {
//     alert("Contraseña in co rrec ta");
//     dato =paserlInt(prompt("Nono, de nuevo"));
//     intentos--;}





// Clase 4

// function resta (num1, num2) {
//     console.log (num1-num2)
//     let resultado= num1-num2;
//     return resultado
// }

// resta (8,7)



// //Calcular IVA

// let precio= parseInt(prompt("Ingresa el valor del producto"))


// //Iva 21%
// function precioConsumidor(precio, impuesto ){
// let precioConsumidor = precio + (precio*impuesto/100);
// console.log (precioConsumidor);
// return precioConsumidor
// }
// ReadableStream
// precioConsumidor (precio, 21)

// //Iva alimentos 8%
// function precioConsumidor(precio, impuesto ){
//     let precioConsumidor = precio + (precio*impuesto/100);
//     console.log (precioConsumidor);
//     return precioConsumidor
//     }

// precioConsumidor (precio, 8)


// const libro = {
//     titulo: "La Metamorfosis",
//     genero: "Realismo mágico",
//     autor: {Nombre: "Fanz",
//             Apellido: "Kafka"},
//     añoPublicacion: "1912"
//     }
// console.log(libro);
// console.log(libro.autor)



//ENTREGA CLASE 5//

// function Biblioteca (titulo, genero,autor, añoPublicacion) {
//     this.titulo = titulo;
//     this.genero = genero;
//     this.autor = autor;
//     this.año = añoPublicacion;
//     this.fichaTecnica = () => {
//         console.log ("El último libro en tu colección es " +this.titulo + " y pertenece al género " + this.genero + ", fue escrito por " + this.autor +" en el año " +this.año  )
//     }
// }

// // const metamorfosis = new Biblioteca ("La Metamofrosis", "Realismo mágico", "Franz Kafka", "1912")
// // console.log (metamorfosis)


// const agregarLibro =() =>{

// let titulo = prompt("Cuál es el titulo del nuevo libro que compraste?")
// let genero = prompt("A que genero pertenece el libro")
// let autor = prompt ("Quien lo escribió")
// let añoPublicacion   =prompt("En que año se publicó?")

// const libro2 = new Biblioteca (titulo, genero, autor, añoPublicacion);
// console.log(libro2)
// console.log(libro2.fichaTecnica())
// }


// let librosParaNiños = ["Harry Potter", "El señor de los anillos", "Juego de tronos", "Crepusculo"]
// console.log (librosParaNiños)
// librosParaNiños.push ("Narnia")
// console.log (librosParaNiños)
// // librosParaNiños.sort
// // // let agregarLibro = prompt("Que libro le gusta a tus hijos?")
// // // librosParaNiños.push (agregarLibro)

// // let librosParaAdultos = ["De Sexualidades publicas y Universidades privadas", "El Aleph", "50 sombras de gray"]
// // let librosParaAdolescentes = ["Catcher in the rye", "Player N5"]

// // let catalogo = librosParaNiños.concat(librosParaAdultos, librosParaAdolescentes)
// // console.log (catalogo)


// class libroNuevo {
//     constructor (titulo, genero, autor, año) {
//             this.titulo = titulo;
//             this.genero = genero;
//             this.autor = autor;
//             this.año = año;
// }
// }

// let biblioteca = []

// const agregarLibro = () =>  {
// let tituloNuevo=prompt("Cuál es el titulo del nuevo libro que compraste?");
// let generoNuevo=prompt("A que genero pertenece el libro");
// let autorNuevo=prompt ("Quien lo escribió");
// let añoNuevo=prompt("En que año se publicó?");

// let libro = new libroNuevo (tituloNuevo, generoNuevo, autorNuevo, añoNuevo)
// biblioteca.push(libro)}
// console.log(biblioteca)


//CLASE 8

// let titulo= document.createElement ("h2");
// titulo.setAttribute ("class", "miH2");
// titulo.innerHTML= "<a href=https://www.google.com>Link a Google</a>"
// document.getElementById("prueba").appendChild(titulo)
// console.log(titulo)

// //CLASE 9
// const parrafo = document.querySelector("#parrafo");
// const boton = document.querySelector("#btn");

// const escribir =() =>{
// let texto = prompt ("Como es tu nombre?")
// parrafo.textContent ="Gracias por tu mensaje " + texto + "!!"}

// boton.addEventListener("click", escribir)

// nombre.onchange = () =>
// {console.log ("Cambio el nombre a "+nombre.value )}
// // texto.onkeydown = () =>
// // // {console.log (texto.value)}
// const escribir = () => {
//     let Nombre = prompt("escribi");
//     parrafo.textContent = texto
// }
// // boton.addEventListener("click", escribir);

// const selector = document.querySelector ("#selector");
// selector.addEventListener ("change", ()=>{
//     console.log (selector.value)
// })

// const enlace= document.querySelector("#enlace")
// enlace.onlcick = (e) => {
//     e.preventDefault();
// }

// //Movimientos

// boton.addEventListener("mousemove", () => {console.log("Hay movimiento");
// });



//Formulario de contacto

// let form = document.getElementsByTagName("form")[0];
// form.addEventListener("submit", () =>
// {alert("Recibido!");
// });

//Carrito

let carts = document.querySelectorAll(".add-cart")

let products = [{
    name: "Jeresy Bulls",
    tag: "bulls",
    price: 2000,
    incCart: 0
},

{
    name: "Bulls Alt.",
    tag: "bullsAlt",
    price: 1000,
    incCart: 0
},

{
    name: "Jeresy Lakers",
    tag: "lakers",
    price: 2000,
    incCart: 0
},

{
    name: "Jeresy Spurs",
    tag: "spurs",
    price: 2000,
    incCart: 0
},
{
    name: "Jeresy Pistons",
    tag: "pistons",
    price: 500,
    incCart: 0
},

{
    name: "Jeresy Philly",
    tag: "philly",
    price: 500,
    incCart: 0
},

{
    name: "Jeresy Raptors",
    tag: "raptors",
    price: 300,
    incCart: 0
},

{
    name: "Jeresy Suns",
    tag: "suns",
    price: 300,
    incCart: 0
},
]
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
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
    localStorage.setItem("totalCost", cartCost+ product.price);
}

else {localStorage.setItem("totalCost", product.price )}


}

function displayCart(){
let cartItems = localStorage.getItem("productsInCart");
cartItems=JSON.parse(cartItems);
// console.log(cartItems)
let productContainer = document.querySelector(".products");


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
        <span>${item.name}</span>
        </div>  
        <div class=price>$${item.price}</div>


    
        <div class=quantity>
         <ion-icon name="arrow-dropleft-circle"></ion-icon>
        ${item.incCart}
        <ion-icon name="arrow-dropright-circle"></ion-icon>
        </div>


        <div class=total >$${item.incCart * item.price }.00</div>
        `
    })
 


}
}


onLoadCartNumbers();
displayCart();