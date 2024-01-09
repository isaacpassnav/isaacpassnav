//  :::::::::::::::::  callBacks  ::::::::::::::::::::::
// :::: PROCESO EN QUE UNA FUNCION RECIBE POR PARAMETRO A OTRA FUNCION Y LA EJECUTA EN SU INTERIOR

var devuelvoUsuario = function(){
    return "camilo";
}
var devueldoSaludo = function(){
    return "hola";
}
var saludar = function(cb1,cb2){
    return cb1()+""+cb2();
};
var resultado =saludar(devueldoSaludo,devuelvoUsuario);
console.log(resultado);
// :::::::::::::::::  EJEMPLO2   :::::::::::::::::::::::::::::

var devuelvoFrase =function(comida){
    return "Hoy quiero comer: "+comida;
};
var hablar =function(comida,cb){
    return cb(comida);
};
var fraseFinal =hablar("Pizza", devuelvoFrase);
console.log(fraseFinal);
