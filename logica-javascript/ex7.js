let num = document.getElementById("num");
let valores = [];

function adicionar() {
  /* esse Number é pra validar se o
    input realmente é um numero */
  if (Number(num.value) < 1 || Number(num.value) > 100 || num.length == 0) {
    window.alert("digite um numero valido entre 1 e 100");
  } else {
    //passou da validação do range dos numeros, entra nesse if dos numeros repetidos
    if (valores.indexOf(num.value) != -1) {
      /* se o indexOf do array valores retornar diferente de -1
        é pq o item existe na lista
        e retorna o valor do array
        */
      window.alert("esse numero ja foi adicionado");
      return valores;
    }
    // da o push do numero no array
    valores.push(num.value);
    console.log(valores);

    //mostrar na tela
    document.getElementById("resultado").innerHTML = valores.toString();
  }
}
