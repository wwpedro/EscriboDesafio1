function somatorioNumDivisivel(){
    
    let numero = prompt("Um numero:");
    let somatorio = 0;
    if(numero > 0){

        
        for (let i = 1; i < numero; i++) {
            if (i%3 == 0 || i%5 == 0){
                somatorio=somatorio+i
            }
                
        }
        if(somatorio==0){
            alert("o somatorio dos numero divisiveis por 3 e 5 até igual a 0 pois voce digitou numeros abaixo de 3")
            somatorioNumDivisivel();
        }else{
            alert("o somatorio dos numero divisiveis por 3 e 5 até o numero que voce digitou eh "+somatorio);
            somatorioNumDivisivel();
        }

    }else{
        alert("digite um numero positivo maior que 0")
        somatorioNumDivisivel();
    }
}

somatorioNumDivisivel();