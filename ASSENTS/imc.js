function imc(){
    const peso =Number(document.getElementById('inputp').value)
    const altura =Number( document.getElementById ('altura').value)
    const res = document.getElementById ('res')
    const res1 = document.getElementById('res1')
    const res2 = document.getElementById('res2')
    const nome = document.getElementById('nome').value

if (peso != '' && altura !== ''){

    const valorimc= (peso / (altura*altura)).toFixed(2)
    let classificacao = ''

if (valorimc < 18.5 ){

     classificacao = ' Voce esta <br> Abaixo do Peso. '
}else if (valorimc < 25){
    classificacao = 'Voce Esta no <br> Seu Peso Ideal. '
}else if (valorimc < 30){
    classificacao = 'Voce esta Acima do <br> seu Peso Ideal. '
}else if (valorimc < 35) {
    classificacao = 'Voce esta com <br>Obesidade Grau I  '
}else if (valorimc < 40) {
    classificacao = 'Voce esta com <br> Obesidade  Grau II  '
}else {
    classificacao = 'Voce esta com <br> Obesidade Grau III , CUIDADO ⚠️'

}
  res.innerHTML = `${valorimc} ` 
  res1.innerHTML=("SEU IMC")
  res2.style.visibility = 'visible';
  res2.innerHTML= (`${nome} ${classificacao}`)
}
else if( nome =='' || peso == '' || altura == '') {
  alert('Erro Preencha os Dados Corretamentes')

}

} 
