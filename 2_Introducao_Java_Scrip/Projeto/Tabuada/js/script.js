//seleção de elementos
const multiplicationForm = document.querySelector(`#multiplication-form`);
const numerador = document.querySelector(`#numerador`);
const denominador = document.querySelector(`#denominador`);
const mutiplicationTabler = document.querySelector(`#mutiplication-operator`);
const show_numerador = document.querySelector(`#show-numerador`);

//funções
const createTable = (numerador, denominador) => {
  mutiplicationTabler.innerHTML = ``;
  for (let i = 1; i <= numerador; i++) {
    const result = denominador * i;
    const template = `<div class="row">
        <div class="operation">${denominador} x ${i} = </div>
        <div class="result">${result}</div>
        </div>`;
    const parser = new DOMParser(); //transforma uma string em um documento html
    const htmlTemplate = parser.parseFromString(template, `text/html`);
    const row = htmlTemplate.querySelector(`.row`);
    mutiplicationTabler.appendChild(row);
  }

  show_numerador.innerHTML = denominador;
};

//eventos
multiplicationForm.addEventListener(`submit`, (event) => {
  event.preventDefault();
  const numeradorValue = numerador.value;
  const denominadorValue = denominador.value;
  if (!numeradorValue || !denominadorValue || denominadorValue > 100) {
    alert(`Por favor, preencha os campos corretamente!`);
    return;
  } else {
    createTable(numeradorValue, denominadorValue);
  }
});
