function  calcular(){
    let candidato
    let quant1 = 0
    let quant2 = 0
    let quant3 = 0
    let quant4 = 0
    let quant5 = 0
    let quant6 = 0
    let total = 0
    
    do {
        candidato = Number(prompt("Digite \n 1.Candidato 1 \n 2.Candidato 2 \n 3.Candidato 3 \n 4.Candidato 4 \n 5.Nulo \n 6.Branco"))
    } while(candidato==0)
    
    do {
        switch(candidato){
            case 1: quant1++; break
            case 2: quant2++; break
            case 3: quant3++; break
            case 4: quant4++; break
            case 5: quant5++; break //nulo
            case 6: quant6++; break //branco
            case 0: alert(`Está opção encerra o programa`); break
            default: alert(`Opção inválida`)
        }
        candidato = Number(prompt("Digite \n 1.Candidato 1 \n 2.Candidato 2 \n 3.Candidato 3 \n 4.Candidato 4 \n 5.Nulo \n 6.Branco \n 0.Para encerrar"))

    } while(candidato !=0){
        total = quant1 + quant2 + quant3 + quant4 + quant5 + quant6
        alert(`Total de votos ${total}`)
        document.getElementById("saida").innerHTML = `Votos no candidato 1 é ${quant1} <br/> Votos no candidato 2 é ${quant2} <br/> Votos no candidato 3 é ${quant3} <br/> Votos no candidato 4 é ${quant4} <br/> Votos nulos ${quant5} <br/> Votos brancos ${quant6} <br/> %Voto nulo ${(quant5/total*100).toFixed(2)} <br/> %Voto Branco ${(quant6/total*100).toFixed(2)}`
    }
}
    