// var listaDeCompras =[];
// listaDeCompras[3]="TOmates";
// listaDeCompras[1]="Lechugas";

//  console.log(listaDeCompras.length);
// var elementoDelArray=listaDeCompras[1];
// console.log(elementoDelArray);
// var colores=["Amarillo", "Rojo"];
// colores.push("Azul");         // añade un elemento al FINAL del array
// colores.unshift("Verde");    // añade un elemento al INICIO del array
// colores.pop();              // elimina el ULTIMO elemento del array
// colores.shift();           // elimina el PRIMER elemento del array
// console.log(colores);
// var palabra="henri";
// var palabraSeparada = palabra.split(""); // SPLIT. separa los elementos de manera individual
// palabraSeparada.pop();
// palabraSeparada.push("y");
// var palabraArreglada=palabraSeparada.join(""); // JOIN. une los elementos 
// console.log(palabraSeparada);
// console.log(palabraArreglada);
// forEach  para cada uno 
// var num =[1,2,3,4];
// num.forEach((num) => console.log(num)); // Imprime los elementos de la lista de manera individual
// num.forEach(num => {if (num ===3) console.log(num)}); 

// var  masUno = num.map((num) => {// suma UNO a todos los elementos de la lista
//     return num+1
// });
// console.log(masUno);

// var pintores=["picasso", "Velazques", "Van Gogh", "Dali"];
// var existeDali = pintores.includes("Dali");
// console.log(existeDali);

// var numeros= [1,6,8,9,46];
// var cumpleCondicion= numeros.every((numeros) => { numeros>5})
// console.log(cumpleCondicion);
// var arr=[1,2,3,4,5];

// for(var i=0; i< arr.length;i++) {
//     console.log(arr[i]);
// }
// function encontarLetraP(str){
//     var letras=str.split("");

//     for( var i=0; i<str.length; i++){
//         if(letras[i] ==="p"){
//             console.log("Si contiene a P");
//         }
//     }
// }
// encontarLetraP("JavaScrip")
// encontarLetraP("ajoloteVerde")

// var arr=[];
// while(arr.length <5){
//     arr.push("BOOM!");
// }
// console.log(arr);
 // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.

function palabrotas(str){
    var letrotas=str.length();

    if(letrotas ==="Hello world"){
        console.log(true);
    }
}
palabrotas("Hello wordd");
palabrotas("jelow word");
palabrotas("hellow world");
palabrotas("Hello world");




