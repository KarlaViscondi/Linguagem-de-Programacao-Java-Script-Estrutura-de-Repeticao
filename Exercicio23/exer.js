function  calcular(){
    let opcao
    let salario
    let novo
    let ferias
    let meses
    let decimo

    do {
        opcao = Number(prompt("Digite \n 1.Novo salário \n 2.Férias \n 3.Décimo Terceiro \n 4.Sair"))
        switch(opcao){
            case 1: salario = Number(prompt("Informe o salário"))
                if(salario<210){
                    novo = salario + (salario*(15/100))
                }else if((salario >=210) && (salario<=600)){
                    novo = salario + (salario*(10/100))
                }else{
                    novo = salario + (salario*(5/100))
                }alert(`Novo salário ${novo}`) //usar desse jeito na prova
                break
            case 2: salario = Number(prompt("Informe o salário"))
                ferias = salario + (salario/3)
                alert(`Novo salário ${ferias}`)
                break
            case 3: salario = Number(prompt("Informe o salário"))
                meses = Number(prompt("Digite os meses trabalhados"))
                if((meses>=0) && (meses<=12)){
                    decimo = (salario*meses)/12
                    alert(`O décimo terceiro é ${decimo}`)
                }else {
                    alert(`Valor ${meses} não está entre 0 e 12`)
                }
               
                break
            case 4: alert("Vai sair")
                break
            default: alert("Opção inválida") //caso digite uma opcao que nao existe, volta para o menu
        }
    } while(opcao !=4){

    }
}
    