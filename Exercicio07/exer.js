function  calcular(){
    let maiorId = 0
    let somaAl = 0
    let quant = 0
    let pesoMenor = 0
    let idade = 0
    let altura = 0
    let peso = 0
    let media = 0
    let perc = 0
    i = 0

    while (i<=5){
        idade = Number(prompt("Digite a idade da pessoa: "))
        altura = Number(prompt("Digite a altura da pessoa: "))
        peso = Number(prompt("Digite a massa corporal da pessoa: "))
        if (idade>50){
            maiorId += 1
        }else if ((idade>10) && (idade<20)){
            somaAl += altura
            quant += 1
        }if (pesoMenor<40){
            pesoMenor += 1
        }i++
    }
    media = somaAl / quant
    perc =  pesoMenor /5

    document.getElementById("saida").innerHTML = "A quantidade de pessoas com idade superior a 50 anos: " + maiorId + "</br>A média das alturas das pessoas com idade entre 10 e 20 anos: " + media 
    document.getElementById("saida1").innerHTML = "</br>A porcentagem das pessoas com massa corporal inferior a 40 quilos entre todas as pessoas analisadas: " + perc
}
    