function mayorYMenorYPar (num){
    if (num > 5 && num <10 && num % 2===0) console.log(true);
    else console.log(false);
};
mayorYMenorYPar(2);
mayorYMenorYPar(7);
// Operador ON 

function OperadorOr(str){
    if (str ==="henry" || str.length<2) console.log(true);
    else console.log(false);
};
OperadorOr("henry");
OperadorOr("isaac");
// Operador none o negacion

function negacion(permiso){
    if (!permiso) console.log("tiene permiso");

};
negacion(true);
negacion(false);
// Condiciones Complejas

function CondicionCompleja(num){
    if (num>9 && num % 2 ===0|| num===3) console.log(true);
    else console.log(false);
};

CondicionCompleja(10);
CondicionCompleja(6);
CondicionCompleja(3);
CondicionCompleja( 5);