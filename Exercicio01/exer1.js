function calcular(){

    let vetor = [[],[],[],[],[]] // vetor com 5 grupos que recebe 4 numeros
    let resultado = document.querySelector("#resultado") // mostrar resultado com query precisa colocar #

    resultado.innerHTML += `<p>Os números de cada grupo são: </p>`
    for(let g = 1; g < 6; g++){ // entrada de 5 grupos comecando com peso 1
        for(let n = 1; n < 5; n++){ // entrada de 4 numeros comecando com peso 1
          vetor[g-1].push(Number(prompt(`Digite ${n}o número do grupo ${g}`)))   // mostrar o vetor (g -1 e porque o grupo comecou valendo 1) caixa para mostrar qual numero e qual grupo esta prompt
        }
        resultado.innerHTML += `<p>${vetor[g-1]}</p>` // mostrar o vetor
    }
    let result = vetor[0].concat(vetor[1],vetor[2],vetor[3],vetor[4])

    result.sort((a,b)=> a - b) // variavel coloca do maior para o menor
    resultado.innerHTML += `<p>Ordem crescente dos números: ${result}</p>` // mostrar o resultado
    //vetor.reverse() // variavel coloca do maior para o menor
    resultado.innerHTML += `<p>Ordem decrescente dos números: ${result.reverse()}</p>` // mostrar o resultado
}




