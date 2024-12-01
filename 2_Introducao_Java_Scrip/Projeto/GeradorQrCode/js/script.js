const container = document.querySelector(".container");
const qrCode0th = document.querySelector("#qr-form button");

//Eventos
function gerarQrCode() {
  console.log("Clicou no botão");
}

qrCode0th.addEventListener("click", () => {
  gerarQrCode();
});

console.log("Script carregado com sucesso");
