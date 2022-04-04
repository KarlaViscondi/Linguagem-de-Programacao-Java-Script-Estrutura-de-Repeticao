function calcular(){
    let id = 0
    let idade = 0
    let faixa1 = 0
    let faixa2 = 0
    let faixa3 = 0
    let faixa4 = 0
    let faixa5 = 0
    let faixaT = 0
    let perc1 = 0
    let perc2 = 0
    let i = 0

    while(i<=8){
        id = prompt("Digite a idade da pessoa: ")
        idade = Number(id)
        if (idade<=15){
            faixa1 += 1
        }else if ((idade>15) && (idade<30)){
            faixa2 += 1
        }else if ((idade>30) && (idade<45)){
            faixa3 += 1
        }else if ((idade>45) && (idade<60)){
            faixa4 += 1
        }else {
            faixa5 += 1
        }
        i++
    }
    faixaT = faixa1 + faixa2 + faixa3 + faixa4 + faixa5
    perc1 = faixa1 / faixaT
    perc2 = faixa5 / faixaT

    document.getElementById("saida").innerHTML = "A quantidade de pessoas com até 15 anos é: " + faixa1 + "</br>A quantidade de pessoas de 16 a 30 anos é: " + faixa2 + "</br>A quantidade de pessoas de 31 a 45 anos é: " + faixa3 + "</br>A quantidade de pessoas de 46 a 60 anos é: " + faixa4 + "</br>A quantidade de pessoas acima de 61 é: " + faixa5
    document.getElementById("saida1").innerHTML = "</br>A porcentagem de pessoas na primeira faixa etária com relação ao total de pessoas é: " + perc1 + "</br></br>A porcentagem de pessoas na última faixa etária com relação ao total de pessoas é: " + perc2
    

}