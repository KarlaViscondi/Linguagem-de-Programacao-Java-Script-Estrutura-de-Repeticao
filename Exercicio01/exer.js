function calcular(){

  let a,b,c,d, aux 
  let grupo = 1
  while (grupo <= 5){
  a= Number(prompt("Informe A")) //caixa de texto para receber valores 
  b= Number(prompt("Informe B")) //caixa de texto para receber valores 
  c= Number(prompt("Informe C")) //caixa de texto para receber valores 
  d= Number(prompt("Informe D")) //caixa de texto para receber valores 

  let contador =1
  while(contador <= 3){
  if (a>b){
     aux = a;a=b; b=aux;
  }
  if (b>c){
     aux = b; b=c; c= aux;
  }
  if (c> d){
      aux = c; c = d; d = aux;
  }
  contador++
 }
 
 alert("Crescente"  + a + " " + b + " " + c + " " + d)
 alert("Decrescente"  + d + " " + c + " " + b + " " + a)
 grupo++

}
}




