function  calcular(){
    let num = Number(document.getElementById("num1").value)
    let i = 0
    let saida = ""
    while (i<=10){
        saida += "<br/> " + num + " x " + i + " = " + (num*i)
        i++
    }
    document.getElementById("saida").innerHTML = saida
}