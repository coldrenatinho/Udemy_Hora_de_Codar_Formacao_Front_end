const myBtn = document.getElementById("my-btn");

let myCount = 0; // Corrigido o nome da variável

myBtn.addEventListener("click", () => {
  console.log(`Clicou no botão ${myCount} vezes`);
  myCount++;
});
