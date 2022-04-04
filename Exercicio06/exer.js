function  calcular(){
    let aVista = 0
    let aPrazo = 0
    let total = 0
    let tipo = 0
    let valor = 0
    let prest = 0
    i = 0

    while (i<=15){
        tipo = prompt("Digite o tipo de pagamento: V- À Vista ou P - A Prazo")
        valor = Number(prompt("Digite o valor da compra: "))
        if ((tipo == "p") || (tipo == "P")){
            aPrazo += valor
        }else if ((tipo == "v") || (tipo == "V")){
            aVista += valor
        }i++
    }
    prest = aPrazo / 3
    total = aPrazo + aVista

    document.getElementById("saida").innerHTML = "O valor total das compras à vista: " + aVista + "</br>O valor total das compras a prazo: " + aPrazo + "</br>O valor total das compras efetuadas: " + total
    document.getElementById("saida1").innerHTML = "</br>O valor da primeira prestação das compras a prazo juntas: " + prest
}
    