const titulo = document.querySelector("h1");
const inputTemp = document.querySelector("input");
const btnEnviar = document.querySelector("button");

btnEnviar.addEventListener("click", function () {
  const temperatura = inputTemp.value;
  if (!temperatura) {
    // alert("No pusiste un valor");
    titulo.textContent = "No pusiste un valor";
  } else if (temperatura < 0) {
    // alert("Hace mucho frio");
    titulo.textContent = "Hace mucho frio";
  } else if (temperatura <= 10) {
    // alert("Hace frio");
    titulo.textContent = "Hace frio";
  } else if (temperatura <= 20) {
    // alert("Temperatura agradable")
    titulo.textContent = "Temperatura agradable";
  } else if (temperatura <= 30) {
    // alert("Hace calor")
    titulo.textContent = "Hace calor";
  } else {
    // alert("HACE MUCHO CALOR")
    titulo.textContent = "Hace mucho calor";
  }
});
