function getListaIngredientes() { }
//document.getElementById("ingredientes").textContent = receita.ingredientes.join(", ");
function getCard() { }

function preencheCatalogo() { }

function getListaIngredientes() { }

function preencheCatalogo() { }

//var requestURL = //"receitasGauchas.json" aqui vem o conteudo do json
const receitasGauchas = {

  nome: "Churrasco",
  ingredientes: [
    "Carne (picanha, costela, linguiça)",
    "Sal grosso",
    "Fogo de chão ou churrasqueira",
    "Acompanhamentos (farofa, vinagrete, pão com alho)"
  ],
  instrucoes: "Tempere a carne com sal grosso, acenda o fogo de chão ou a churrasqueira e asse a carne até o ponto desejado. Sirva com os acompanhamentos.",
  imagem: "Churrasco.jpg"
}
//document.getElementsById("titulo").textContent = receitasGauchas.nome;
document.getElementById("ingredientes").textContent = receitasGauchas.ingredientes;
document.getElementById("instrucoes").textContent = receitasGauchas.instrucoes

document.getElementById("imagem").innerHTML = "<img src= 'churrasco.jpg' width= '250'>";
const segundoIngrediente = receitasGauchas.ingredientes[1];
console.log(segundoIngrediente);