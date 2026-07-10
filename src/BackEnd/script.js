/**
 * Referenciar/linkar os elementos do Hmtl com js
 * */
let listElement = document.querySelector("#divListaDeTarefas ul");
let inputElement = document.querySelector("#divListaDeTarefas input");
let buttonElement = document.querySelector("#divListaDeTarefas button");

/**
 * Arry criado para guardar as tarefas criadas
 */
let ListaDeTarefas = [];

//Função para apresentar a lista de tarefas
function renderizarTarefas() {
  listElement.innerHTML = "";

  /**
   * A função push() em JavaScript percorre o array original e aplica uma função de transformação em cada
   * elemento, retornando um novo array com os resultados, sem alterar a lista original.
   */
  ListaDeTarefas.map((tarefaCriada) => {
    let liElement = document.createElement("li");
    let textoDaTarefa = document.createTextNode(tarefaCriada);

    //adicionando a lista no HTML
    liElement.appendChild(textoDaTarefa);
    listElement.appendChild(liElement);
  });
}

//Função para adionar novas tarefas
function adicionarTarefa() {
  //Validar se o usuário digitou algo no input
  if (inputElement.value === "" || inputElement.value === null) {
    alert("Necessário preencher campo com a tarefa desejada.");
    return false;
  } else {
    let novaTarefa = inputElement.value;

    //A função push() em JavaScript é usada para adicionar um ou mais elementos ao final de um array.
    ListaDeTarefas.push(novaTarefa);

    inputElement.value = "";

    renderizarTarefas();
  }
}

buttonElement.onclick = adicionarTarefa;
