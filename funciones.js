function sumatres(x){
    console.log(x+3);
}

sumatres(5);

//Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}
//Precedencia de valores
var a = 1;
var b = 2;
var c = a = b;
console.log (c); 