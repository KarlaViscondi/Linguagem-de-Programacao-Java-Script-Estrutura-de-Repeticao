function  calcular(){
    let cod = 0
    let i = 0
    let j = 0
    let transV = 0
    let transP = 0
    let valorV = 0
    let valorP = 0
    let valorT = 0
    let prest = 0

    /*while (i<=15){
        switch (cod){
            case 'V' || 'v': 
                transV += prompt("Entre com o" + i +"º número: ")
                valorV = valorV + transV 
            break;
            case 'P' || 'p':
            transP += prompt("Entre com o" + i +"º número: ")
            valorP = valorP + transP
            break;
        } i++
    }   */   
    while (j<=15){
        cod = prompt("Entre com V - À vista ou P - A prazo: ")
        switch (cod) {
            case "V" || "v": 
                while (i<=15){
                     transV += prompt("Entre com o" + i +"º número: ")
                     valorV = valorV + transV 
                 } break;
            case "P" || "p":
                 while (i<=15){
                     transP += prompt("Entre com o" + i +"º número: ")
                     valorP = valorP + transP
                 } break;
         }
         j++
         i++
    }
    
    prest = valorP / 3
    valorT = valorV + valorP

    document.getElementById("saida").innerHTML = valorV + valorP + prest + valorT
}
    