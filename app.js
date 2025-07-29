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

// Função para sortear um amigo
function sortearAmigo() {
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = "";

  if (listaDeAmigos.length === 0) {
    alert("Adicione pelo menos um nome para realizar o sorteio.");
    return;
  }

  const sorteadoIndex = Math.floor(Math.random() * listaDeAmigos.length);
  const sorteado = listaDeAmigos[sorteadoIndex];

  const li = document.createElement("li");
  li.textContent = `O nome sorteado foi ${sorteado}`;
  resultadoElement.appendChild(li);
}

// Função para embaralhar array
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
