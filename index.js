let form = document.getElementById("formulario");

const nome = form.elements[0];
const email = form.elements[1];
const msg = form.elements[4];

form.addEventListener("submit", (event) => {
  if (nome.value == "") {
    alert("Preencha seu nome!");
  }

  if (email.value == "") {
    alert("Preencha seu email!");
  }

  if (msg.value == "") {
    alert("Deixe sua mensagem para nós!");
  }
});
