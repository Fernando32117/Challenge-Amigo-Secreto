const listaDeAmigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  //Verifica se um nome já existe na lista
  if (listaDeAmigos.includes(nome)) {
    alert("Este nome já foi adicionado.");
    return;
  }

  listaDeAmigos.push(nome);
  input.value = "";
  atualizarLista();
}

// Função para atualizar a lista
function atualizarLista() {
  const listaElement = document.getElementById("listaAmigos");
  listaElement.innerHTML = "";

  listaDeAmigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaElement.appendChild(li);
  });
}
