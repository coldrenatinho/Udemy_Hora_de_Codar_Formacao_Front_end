console.log("O script está funcionando!");

//Busca o elemento pelo ID
const buttons = document.querySelectorAll("#image-picker li");

//Busca o elemento pelo ID
const image = document.querySelector("#product-image");

//Adiciona um evento de click para cada botão
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });
  });
});
