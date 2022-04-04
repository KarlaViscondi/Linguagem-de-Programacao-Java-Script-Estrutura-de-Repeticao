function calcular(){
    let preco = 5
    let ingresso = 120
    
    while (preco>1){
        document.getElementById("saida").innerHTML += ("</br></br>Lucro máximo: " + ((ingresso * preco) - 200) + "</br>Preço do ingresso: " + preco + "</br>Quantidade de ingressos vendidos: " + ingresso)
        preco = preco - 0.5
        ingresso = ingresso + 26
    }
    
}