/**
 * Referenciar/linkar os elementos do Hmtl com js
 * */
let listElement = document.querySelector("#divListaDeTarefas ul");
let inputElement = document.querySelector("#divListaDeTarefas input");
let buttonElement = document.querySelector("#divListaDeTarefas button");

/**
 * Arry criado para guardar as tarefas criadas
 */
let listaDeTarefas = [];

//Função para apresentar a lista de tarefas
function renderizarTarefas() {
  listElement.innerHTML = "";

  /**
   * A função push() em JavaScript percorre o array original e aplica uma função de transformação em cada
   * elemento, retornando um novo array com os resultados, sem alterar a lista original.
   */
  listaDeTarefas.map((tarefaCriada) => {
    let liElement = document.createElement("li");
    let textoDaTarefa = document.createTextNode(tarefaCriada);

    //adicionando o link de excluir no HTML
    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let posicaoTarefaCriada = listaDeTarefas.indexOf(tarefaCriada);
    //Ao clicar no botão excluir chama a função de excluir a tarefa
    linkElement.setAttribute(
      "onclick",
      `excluirTarefa(${posicaoTarefaCriada})`,
    );

    let textoDoLink = document.createTextNode("Excluir");
    linkElement.appendChild(textoDoLink);

    //adicionando a lista no HTML
    liElement.appendChild(textoDaTarefa);
    liElement.appendChild(linkElement);
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
    listaDeTarefas.push(novaTarefa);

    inputElement.value = "";

    renderizarTarefas();
  }
}

buttonElement.onclick = adicionarTarefa;

/**
 * Função criada para excluir a tarefa
 */
function excluirTarefa(posicaoTarefaCriada) {
  //método splice() do JavaScript permite adicionar, remover ou substituir elementos em um array.
  listaDeTarefas.splice(posicaoTarefaCriada, 1);

  //Após excluir a tarefa, é necessário renderizar a lista novamente no HTML
  renderizarTarefas();
}
