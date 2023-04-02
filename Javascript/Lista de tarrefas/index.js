// PEGAR O FORMULARIO
const form = document.getElementById("addCard");
const main = document.getElementsByTagName("main")[0];

const sectionTodo = document.getElementById("todo");
const sectionDone = document.getElementById("done");
const sectionCancelled = document.getElementById("cancelled");

const showForm = () => {
  // MOSTRAR O FORMULARIO
  form.classList.toggle("hidden");
  // ESCONDER OS CARDS (ESTÃO NA MAIN)
  main.classList.toggle("hidden");
};

const expandCard = (id, event) => {
  const card = document.getElementById(id);
  card.classList.toggle("extended");

  if (event.target.nodeName == "BUTTON") {
    event.target.children[0].classList.toggle("rotate");
  } else {
    event.target.classList.toggle("rotate");
  }
};

const deleteCard = (id) => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  let idToRemove = null;
  let idElementToRemove = null;

  for (let i = 0; i < tasks.length; i++) {
    if (id === tasks[i].id) {
      idToRemove = i;
      idElementToRemove = tasks[i].id;
    }
  }

  tasks.splice(idToRemove, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  const elementToRemove = document.getElementById(idElementToRemove);
  elementToRemove.remove();
};

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  // QUE EU POSSO ARRASTAR PARA QUALQUER LUGAR
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");

  let parent = ev.target;
  let style = null;

  if (
    ev.target.id == "done" ||
    ev.target.id == "cancelled" ||
    ev.target.id == "todo"
  ) {
    style = `card__${ev.target.id}`;
  } else {
    return;
  }

  const element = document.getElementById(data);
  element.classList.remove(element.classList[1]);
  element.classList.add(style);

  parent.appendChild(element);

  const tasks = JSON.parse(localStorage.getItem("tasks"));

  for (let task of tasks) {
    // VEJO QUAL CARD FOI JOGADO NA COLUNA
    if (task.id === data) {
      // ATUALIZO O STATUS DO CARD
      task.status = ev.target.id;
    }
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

const getId = () => {
  const id = localStorage.getItem("id") || "0";
  return id;
};

const insertCard = (newTask) => {
  // CRIAR DIV CARD CONTAINER
  const cardContainer = document.createElement("div");
  // CRIAR DIV CLASS INFO
  const cardInfo = document.createElement("div");
  // CRIAR TITULO DO CLASS INFO
  const cardTitle = document.createElement("h3");
  // CRIO A DESCRIÇÃO
  const cardDescription = document.createElement("p");
  // CRIO A DATA
  const cardDate = document.createElement("span");

  // INSERINDO DADOS
  cardTitle.innerHTML = newTask.title;
  cardDescription.innerHTML = newTask.description;
  cardDate.innerHTML = newTask.date;

  // ESTILIZO, DANDO CLASSES PARA CADA UM
  cardInfo.classList.add("info");
  cardDate.classList.add("date");
  cardContainer.classList.add("card");

  // INSERIR O ID NO CARD
  cardContainer.setAttribute("id", newTask.id);

  // ADICIONANDO DRAG AND DROP
  cardContainer.setAttribute("draggable", true);
  cardContainer.setAttribute("ondragstart", "drag(event)");

  // INSERIR UM ELEMENTO DENTRO DO OUTRO
  cardInfo.append(cardTitle, cardDescription);
  cardContainer.append(cardInfo, cardDate);

  if (newTask.status === "todo") {
    sectionTodo.append(cardContainer);
    cardContainer.classList.add("card__todo");
  } else if (newTask.status === "done") {
    sectionDone.append(cardContainer);
    cardContainer.classList.add("card__done");
  } else if (newTask.status === "cancelled") {
    sectionCancelled.append(cardContainer);
    cardContainer.classList.add("card__cancelled");
  }

  // CRIAR O BOTÃO NO DOM
  const buttonDelete = document.createElement("button");
  const buttonImage = document.createElement("img");

  buttonDelete.classList.add("stickyRight", "button__rotate");

  buttonImage.setAttribute("src", "img/xmark-solid.svg");

  // ADICIONAR EVENTO AO BOTÃO
  buttonDelete.addEventListener("click", () => deleteCard(newTask.id));

  // INSERIR NO CARD
  buttonDelete.append(buttonImage);

  cardContainer.append(buttonDelete);

  const buttonExpand = document.createElement("button");
  const buttonImageExpand = document.createElement("img");

  buttonExpand.classList.add("stickyLeft");
  buttonImageExpand.setAttribute("src", "img/chevron-down-solid.svg");

  buttonExpand.addEventListener("click", (event) =>
    expandCard(newTask.id, event)
  );

  buttonExpand.append(buttonImageExpand);

  cardContainer.append(buttonExpand);
};

const insertCards = () => {
  // INSERIR OS CARDS DE ACORDO COM SUA COLUNA
  // PEGAR TODOS OS CARDS NO LOCAL STORAGE
  const tasks = JSON.parse(localStorage.getItem("tasks") || "0");

  if (tasks) {
    for (let task of tasks) {
      insertCard(task);
    }
  }
};

const addCard = (event) => {
  event.preventDefault();
  // PEGAR OS ELEMENTOS DO FORMULARIO OK
  // PEGAR OS VALORES DESSES ELEMENTOS OK
  const title = form.children[0].value;
  const description = form.children[1].value;
  const date = form.children[2].children[0].value;

  let id = getId();

  const newTask = {
    title,
    description,
    date,
    status: "todo",
    id,
  };

  id++;
  localStorage.setItem("id", id);

  // localStorage.getItem("tasks") || RETORNA STRING
  // TRANSFORMA EM OBJETO -> JSON.parse -> TRANSFORMA STRING EM OBJETO
  let allTasks = [newTask];
  const oldTasks = JSON.parse(localStorage.getItem("tasks"));

  // EU VERIFICO SE EXISTE TAREFAS ANTIGAS.
  if (oldTasks) {
    allTasks = [...oldTasks, newTask];
  }

  insertCard(newTask);

  // PERSISTIR ESTES VALORES NO LOCALSTORAGE
  localStorage.setItem("tasks", JSON.stringify(allTasks));

  showForm();
};