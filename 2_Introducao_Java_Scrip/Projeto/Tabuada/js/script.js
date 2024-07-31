//seleção de elementos
const multiplicationForm = document.querySelector(`#multiplication-form`);
const numerador = document.querySelector(`#numerador`);
const denominador = document.querySelector(`#denominador`);

const mutiplicationTabler = document.querySelector(`#mutiplication-operator`);
//funções
const createTable = (numerador, denominador) => {
  mutiplicationTabler.innerHTML = ``;
  for (let i = 1; i <= numerador; i++) {
    console.log(denominador * i);
  }
};

//eventos
multiplicationForm.addEventListener(`submit`, (event) => {
  event.preventDefault();
  const numeradorValue = numerador.value;
  const denominadorValue = denominador.value;
  if (!numeradorValue || !denominadorValue) {
    alert(`Por favor, preencha os campos corretamente!`);
    return;
  } else {
    const result = numeradorValue * denominadorValue;
    console.log(numeradorValue, denominadorValue, result);
  }

  createTable(numeradorValue, denominadorValue);
});
