function mayorYMenor(num){
    if (num > 5 && num < 10 )console.log(true);
    else console.log(false);
}

mayorYMenor(2);
mayorYMenor(7);


//AND
function mayorYMenorYPar(num){
    if (num > 5 && num < 10 && num % 2===0)console.log(true);
    else console.log(false);
}

mayorYMenorYPar(7);
mayorYMenorYPar(8);

// OR
function operadOr(str){
    if(str=='henry' || str.length<2)console.log(true);
    else console.log(false);

}

operadorOr('Henry');
operadorOr('Javascript');
operadorOr('H');


// NOT
function negacion(permiso){
    if(!permiso) console.log('tiene permiso');
}

negacion(true);
negacion(false);


function condicionCompleje(num){
    if (num > 9 && num  % 2  === 0 || num === 3)console.log(true);
    else  console.log (false);
};

condicionCompleje(18);
condicionCompleje(6);
condicionCompleje(3);
condicionCompleje(5);

