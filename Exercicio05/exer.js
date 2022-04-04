function calcular(){
    let i = 0
    let saida = ""
    let saida1 = ""
    let saida2= ""
    let saida3 = ""
    let saida4 = ""
    let saida5 = ""
    let saida6 = ""
    let saida7 = ""
    let saida8 = ""
    let saida9 = ""

    while(i<=10){
        saida = saida + "</br>1 x" + i + "=" + (1*i)
        saida1 = saida1 + "</br>2 x" + i + "=" + (2*i)
        saida2 = saida2 + "</br>3 x" + i + "=" + (3*i)
        saida3 = saida3 + "</br>4 x" + i + "=" + (4*i)
        saida4 = saida4 + "</br>5 x" + i + "=" + (5*i)
        saida5 = saida5 + "</br>6 x" + i + "=" + (6*i)
        saida6 = saida6 + "</br>7 x" + i + "=" + (7*i)
        saida7 = saida7 + "</br>8 x" + i + "=" + (8*i)
        saida8 = saida8 + "</br>9 x" + i + "=" + (9*i)
        saida9 = saida9 + "</br>10 x" + i + "=" + (10*i)
        i++
    }
    document.getElementById("saida").innerHTML = saida + "</br>" + saida1 + "</br>" + saida2+ "</br>" + saida3+ "</br>" + saida4+ "</br>" + saida5+ "</br>" + saida6+ "</br>" + saida7+ "</br>" + saida8+ "</br>" + saida9
}
