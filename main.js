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





//Clase 4

// function resta (num1, num2) {
//     console.log (num1-num2)
//     let resultado= num1-num2;
//     return resultado
// }

// // resta (8,7)



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


let librosParaNiños = ["Harry Potter", "El señor de los anillos", "Juego de tronos", "Crepusculo"]
console.log (librosParaNiños)
librosParaNiños.push ("Narnia")
console.log (librosParaNiños)
librosParaNiños.sort
// let agregarLibro = prompt("Que libro le gusta a tus hijos?")
// librosParaNiños.push (agregarLibro)

let librosParaAdultos = ("De Sexualidades publicas y Universidades privadas", "El Aleph", "50 sombras de gray")

let catalogo = librosParaNiños.concat(librosParaAdultos)
console.log (catalogo)