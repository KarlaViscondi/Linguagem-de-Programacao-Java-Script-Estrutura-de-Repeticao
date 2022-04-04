function  calcular(){
    let maiorId = 0
    let somaId = 0
    let quant = 0
    let azul = 0
    let idade = 0
    let altura = 0
    let peso = 0
    let olhos = ""
    let cabelo =  ""
    let media = 0
    let perc = 0
    let ruivo = 0
    i = 0

    while (i<=6){
        idade = Number(prompt("Digite a idade da pessoa: "))
        altura = Number(prompt("Digite a altura da pessoa: "))
        peso = Number(prompt("Digite a massa corporal da pessoa: "))
        olhos = prompt("Digite a cor dos olhos da pessoa: A-Azul ou P-Preto ou V-Verde ou C-castanho")
        cabelo = prompt("Digite a cor do cabelo da pessoa: P-Preto ou C-Castanho ou L-Loiro ou R-Ruivo")
        if ((idade>50) && (peso<60)){
            maiorId += 1
        }if (altura<1.50){
            somaId += idade
            quant += 1
        }if ((olhos == "A") || (olhos == "a")){
            azul += 1
        }if ((cabelo == "R") || (cabelo == "r") && (olhos != "A") || (olhos != "a")){
            ruivo += 1
        }i++
    }
    media = somaId / quant
    perc =  azul /6

    document.getElementById("saida").innerHTML = "A quantidade de pessoas com idade superior a 50 anos e peso inferior a 60 quilos: " + maiorId + "</br>A média das idades das pessoas com altura até 1.50: " + media 
    document.getElementById("saida1").innerHTML = "</br>A porcentagem das pessoas com olhos azuis entre todas as pessoas analisadas: " + perc + "</br>A quantidade de ruivos que não tem olhos azuis: " + ruivo
}
    