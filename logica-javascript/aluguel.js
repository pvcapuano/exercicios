function valorMulta() {
  let aluguel = document.getElementById("aluguel").value * 3;
  let meses = document.getElementById("meses").value;

  let calc = aluguel / 30;

  let total = calc * meses;

  document.getElementById("total").innerHTML = total;
}
