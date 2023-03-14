/*
objetivo - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente.

- passo 1 - dar um jeito de pagar o elemento HTML dos botões.

- passo 2 - dar um jeito de identificar o clique do usuário no botão

- passo 3 - desmarcar o botão selecionado anterior 

- passo 4 - marcar o botão clicado como se estivesse selecionado

- passo 5 - esconder a imagem ativa anterior 

- passo 6 - fazer a aparecer a imagem correspondente ao botão clicado
*/


const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);
 
        esconderImagemAtiva();

console.log(imagens);
        mostrarImagemDeFundo(indice);
    })
})
    
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

