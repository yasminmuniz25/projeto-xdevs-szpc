// OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
// cartao da lista

// passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0; /*o let está sendo usado pois será necessário mudar o valor da variavel*/
const cartoes = document.querySelectorAll(".cartao");

// btnAvancar é a variável
//passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if (ehUltimoCartao) return;

    //  passo 4 - buscar o cartão que esta selecionado e esconder, removendo o que já temFF
    esconderCartaoSelecionado();


    //passo 3 - fazer aparecer o próximo cartão da lista colocando a classe selecionado nele

    cartaoAtual++;
    mostrarCartao();
});

// OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
// anterior da lista

// passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function () {
    const ehPrimeiroCartao = cartaoAtual === 0;
    if (ehPrimeiroCartao) return;


    esconderCartaoSelecionado();

    // passo 3 - fazer aparecer o cartão anterior da lista

    cartaoAtual--;
    mostrarCartao();
});
function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

