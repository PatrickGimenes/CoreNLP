const form = document.getElementById("formulario");

const nome = form.elements[0];
const email = form.elements[1];
const msg = form.elements[4];

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

form.addEventListener("submit", (event) => {
  if (nome.value == "") {
    alert("Preencha seu nome!");
  }

  if (emailRegex.test(email.value) ) {
    alert("Preencha seu email!");
  }

  if (msg.value == "") {
    alert("Deixe sua mensagem para nós!");
  }
});
