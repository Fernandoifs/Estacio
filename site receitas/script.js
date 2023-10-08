function getListaIngredientes() { }

function getCard() { }

function preencheCatalogo() { }

function getListaIngredientes() { }

function preencheCatalogo() { }

function pesquisar() {
  const searchInput = document.querySelector('.search-bar .search-input').value.toLowerCase();
  const receitas = document.querySelectorAll('.receita');

  receitas.forEach(receita => {
    const nome = receita.querySelector('h2').textContent.toLowerCase();

    if (nome.includes(searchInput)) {
      receita.style.display = '';
    } else {
      receita.style.display = 'none';
    }
  });
}

document.querySelector('.search-bar .search-input').focus();
document.querySelector('.search-bar button').addEventListener('click', pesquisar);

//adicionando com enter
window.addEventListener("keypress", (e) => {
  if (e.key === 'Enter') {
    pesquisar();
  }
});


fetch('./receitasGauchas.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON');
    }
    return response.json();
  })
  .then(data => {
    const receitaRecebida = data.receitas_gauchas;

    // Obtém o elemento pai onde as receitas serão adicionadas
    const container = document.getElementById('receitas-container');

    receitaRecebida.forEach(receita => {
      // Cria uma div para a receita
      const receitaDiv = document.createElement('div');
      receitaDiv.className = 'receita';
      receitaDiv.id = receita.nome;

      // Adiciona o nome da receita à div
      const nome = document.createElement('h2');
      nome.textContent = receita.nome;
      receitaDiv.appendChild(nome);

      // Adiciona a imagem à div
      const img = document.createElement('img');
      img.src = receita.imagem;
      receitaDiv.appendChild(img);

      const textIngredientes = document.createElement('h4');
      textIngredientes.textContent = 'Ingredientes';
      receitaDiv.appendChild(textIngredientes)
      // Adiciona os ingredientes à div
      const ingredientes = document.createElement('ul');
      receita.ingredientes.forEach(ingrediente => {
        const li = document.createElement('li');
        li.textContent = ingrediente;
        ingredientes.appendChild(li);
      });
      receitaDiv.appendChild(ingredientes);

      const textInstrucoes = document.createElement('h4');
      textInstrucoes.textContent = 'Instruções';
      receitaDiv.appendChild(textInstrucoes)

      // Adiciona as instruções à div
      const instrucoes = document.createElement('p');
      instrucoes.textContent = receita.instrucoes;
      receitaDiv.appendChild(instrucoes);

      // Adiciona a div da receita ao container
      container.appendChild(receitaDiv);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar ou processar o arquivo JSON', error);
  });

