// var deportes ={ 
//     conBalon:["futboll","basquetball","voley"],
//     sinBalon:["natacion","rugby","Boxeo"]
// };

// var persona ={ nombre:"juan", edad:22, estudios: {esProgramador: true}};
// // OBJETOS TIENEN UNA PROPIEDAS KEY:VALUE; ASIGNA PROPIEDADES Y VALORES 
// console.log(deportes);
// persona.nombre="Isaac";
// console.log(persona.nombre);// imprime la propiedad especifica "NOMBRE"

// var autos={};
// autos.marcas=["ford","audi","ferrari"];
// delete autos.marcas;
// console.log(autos);

//Dot Notation
// var atuendos={manos:["guantes","anillos"], pies:["chancla","zapatos"]};
// console.log(atuendos.manos); // Dot Notation porque se usa un . para acceder a las propiedades
// //BRacket NOtation

// atuendos["piernas"]=["Bermudas","pantalones"];//USA CORCHETES PARA ACCEDER A LAS PROPIEDADES
// console.log(atuendos);
// // :::::::::::::::::::::  EJEMPLO DE DOT NOTATION  :::::::::::::::::::
// var comidas={};
// var diferenciaDeNotaciones= function(propUno,propDos){
//     comidas.propUno=["frutas","vejetales"];
//     comidas.propDos=["hamburguesa","papas fritas"]
// };
// diferenciaDeNotaciones("Saludable","No saludable");
// console.log(comidas);
// // ::::::::::::::::::::::::  EJEMPLO DE BRACKET NOTATION  ::::::::::::

// var autos ={};
// var diferenciaConBracketNotation=function(textoUno,textoDos){
//     autos[textoUno]=["Audi","Mercedes Benz","jaguar"];
//     autos[textoDos]=["americanos","chinos","ruso"];
// }
// diferenciaConBracketNotation("Marcas","Paices");
// console.log(autos);



//  :::::::::::::::::::::::  METODOS DE OBJETOS hasOwnProperty() :::::::::::::::::::::

// var libro ={autor:"Borges", genero:"Policial", año:1990};
// var tienePropiedad =libro.hasOwnProperty("nombre");
// console.log(tienePropiedad);
// // ::::::::::::::::::::::::  METODOS DE OBJETOS Object.keys()  :::::::::::::::::::::::::

// var peliculas ={autor:"Vivaldi", genero:"barroco", año:1840};
// var todasLasPropiedades =Object.keys(peliculas);// IMPRIME EN CONSOLA TODOS LOS OBJETOS
// console.log(todasLasPropiedades);
// //  :::::::::::::::::::::  RECORRIDOS EN OBJETOS for( ... in ...)  ::::::::::::::::::::::

// var mundo ={ continentes:7, paises:195, ocenanos:7};

// for (let prop in mundo){
//     console.log("esta es la propiedad "+ prop);// IMPRIME LOS OBJETOS
//     console.log("este es el valor "+ mundo[prop]);// IMPRIME EN CONSOLA TODOS LOS VALORES DE LOS OBJETOS DENTRO DE MUNDO
// }
// ::::::::::::::::::::  CONTEXTO THIS EN JAVASCRIP  ::::::::::::::::::::::::::::::::

var mascota ={
    animal: "perro", 
    raza:"Pitbull",
    nombre:"Kira la Bestia",
    amistoso: true,
    dueño:"Isaac Pasapera",
    info: function(){
        console.log("Mi perro es un "+ this.raza + " y se llama ", this.nombre + "y es amistosa: "+this.amistoso);
    },
};
mascota.info();
