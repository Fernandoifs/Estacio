function getListaIngredientes() { }
//document.getElementById("ingredientes").textContent = receita.ingredientes.join(", ");
function getCard() { }

function preencheCatalogo() { }

function getListaIngredientes() { }

function preencheCatalogo() { }

// var json = []
// fetch('./content.json').then(response => json = response.json())

var requestURL = "receitasGauchas.json" //aqui vem o conteudo do json
const receitasGauchas =  [
  {

  nome: "Churrasco",
  ingredientes: [
    "Carne (picanha, costela, linguiça)",
    "Sal grosso",
    "Fogo de chão ou churrasqueira",
    "Acompanhamentos (farofa, vinagrete, pão com alho)"
  ],
  instrucoes: "Tempere a carne com sal grosso, acenda o fogo de chão ou a churrasqueira e asse a carne até o ponto desejado. Sirva com os acompanhamentos.",
  imagem: "Churrasco.jpg"
}, 
{
  nome: "Feijoada Gaúcha",
  ingredientes: [
    "Feijão preto",
    "Carne de porco (linguiça, costela, orelha, pé)",
    "Arroz",
    "Couve manteiga",
    "Farinha de mandioca",
    "Laranja"
  ],
  instrucoes: "Cozinhe o feijão preto com as carnes de porco até ficarem macias. Sirva com arroz, couve manteiga refogada, farinha de mandioca e laranja em rodelas.",
  imagem: "feijoada.jpg"
},
{
  nome: "Arroz de Carreteiro",
  ingredientes: [
    "Carne de charque",
    "Arroz",
    "Cebola",
    "Alho",
    "Pimentão",
    "Tomate",
    "Temperos a gosto"
  ],
  instrucoes: "Corte a carne de charque em pedaços pequenos e refogue com cebola, alho, pimentão e tomate. Acrescente o arroz e cozinhe até que esteja pronto. Tempere a gosto e sirva.",
  imagem: "carreteiro.jpg"
},
{
  nome: "Cuca",
  ingredientes: [
    "Farinha de trigo",
    "Açúcar",
    "Ovos",
    "Banha ou manteiga",
    "Fermento biológico",
    "Frutas (geralmente, banana ou maçã)",
    "Canela"
  ],
  instrucoes: "Prepare uma massa com farinha de trigo, açúcar, ovos, banha ou manteiga e fermento biológico. Estenda a massa em uma forma, coloque as frutas por cima e polvilhe com açúcar e canela. Asse até dourar.",
  imagem: "cuca.jpg"
}
]

let nome0 = document.getElementById('nome');
nome0.innerHTML = receitasGauchas[0].nome;

let img0 = document.getElementById('imagem');
img0.src = receitasGauchas[0].imagem;

let ingred0 = document.getElementById("ingredientes");

for (let i = 0; i < receitasGauchas[0].ingredientes.length; i++) {
  let linha = document.createElement("li");
  linha.textContent = receitasGauchas[0].ingredientes[i];
  ingred0.appendChild(linha);
}

let instr0 = document.getElementById('instrucoes');
instr0.textContent = receitasGauchas[0].instrucoes;
////////////////////////////////////////////
let nome1 = document.getElementById('nome1');
nome1.innerHTML = receitasGauchas[1].nome;

let img1 = document.getElementById('imagem1');
img1.src = receitasGauchas[1].imagem;

let ingred1 = document.getElementById("ingredientes1");

for (let i = 0; i < receitasGauchas[1].ingredientes.length; i++) {
  let linha = document.createElement("li");
  linha.textContent = receitasGauchas[1].ingredientes[i];
  ingred1.appendChild(linha);
}

let instr1 = document.getElementById('instrucoes1');
instr1.textContent = receitasGauchas[1].instrucoes;
///////////////////////////////////////////

let novoContainer = document.querySelector("div#container")

receitasGauchas.forEach(function(receitaNome){
  let div = document.createElement('div');
  div.classList.add("container");
  div.textContent = receitaNome.nome;
  novoContainer.appendChild(div);

});
