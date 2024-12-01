// Descrição: Script de controle da página de geração de QR Code
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeImg = document.querySelector("#qr-code img");

//Inputs
const qrCodeInput = document.querySelector("#qr-form input");

//Eventos
function gerarQrCode() {
  //Pega o valor do input
  const qrCodeInputValue = qrCodeInput.value;
  //   console.log(qrCodeInputValue);

  //Verifica se o input está vazio
  if (!qrCodeInputValue) {
    alert("Digite um texto para gerar o QR Code");
    return;
  }

  //Muda o texto do botão
  qrCodeBtn.innerHTML = "Gerando QR Code...";

  //Muda o texto do botão após 2 segundos
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  //Muda o texto do botão após 2 segundos
  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerHTML = "Qr Code Gerado!";
  });
}

//Eventos
qrCodeBtn.addEventListener("click", () => {
  gerarQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    gerarQrCode();
  }
});

qrCodeInput.addEventListener("keyup", () => {
  //Verifica se o input está vazio
  if (!qrCodeInput.value) {
    qrCodeBtn.classList.remove("active");
    qrCodeBtn.innerHTML = "Gerar Qr Code!";
    container.classList.remove("active");
  }
});

//Mensagem de carregamento
console.log("Script carregado com sucesso");
