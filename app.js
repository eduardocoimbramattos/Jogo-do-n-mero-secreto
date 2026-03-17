let listaDeNumerosSorteados = [];
let numeroLimite = 100;
 numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirNaTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial() {
    exibirNaTextoNaTela('h1', 'Jogo do número secreto');
    exibirNaTextoNaTela('p', 'Escolha um número entre 1 e 100'); 
}
exibirMensagemInicial();

function verificarChute() { 
    let chute = document.querySelector('input').value;
   
    if (chute == numeroSecreto) {
        exibirNaTextoNaTela('h1', 'Parabéns! Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}.`;
        exibirNaTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto) {
            exibirNaTextoNaTela('p', 'Tente um número menor!');
        }else {
            exibirNaTextoNaTela('p', 'Tente um número maior!');
        }
        tentativas++;
        limparCampo();
}
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite) + 1;
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;
    if (quantidadeDeNumerosSorteados >= numeroLimite) {
        alert('Todos os números entre 1 e 100 já foram sorteados. Reiniciando o jogo.');
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    document.querySelector('input').value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


