function enviarMensagem() {
    var textoEscrito = document.getElementById("textoEscrito").value;
    criarMensagemEmissor(textoEscrito);
    criarMensagemResposta ("Obrigado pela mensagem.");
}

function criarMensagemEmissor(textoMensagem) {
    /* Criando estrutura emissora de nensagem */
    var divEmissor = document.createElement("div");
    divEmissor.classList.add('emissor');

    var divMsgEmissor = document.createElement("div");
    divMsgEmissor.classList.add('msg');

    var p = document.createElement("p"); //create the paragraph tag
    p.innerHTML = textoMensagem;
    divMsgEmissor.appendChild(p);

    divEmissor.appendChild(divMsgEmissor);

    var telaMensagem = document.getElementById("telaMensagem");
    telaMensagem.appendChild(divEmissor);
}

function criarMensagemResposta(textoMensagem) {
    /* Criando mensagem resposta */
    var divEmissorResposta = document.createElement("div");
    divEmissorResposta.classList.add('emissor','right');
    
    var divMsgEmissorResposta = document.createElement("div");
    divMsgEmissorResposta.classList.add('msg');
    
    var p = document.createElement("p"); //create the paragraph tag
    p.innerHTML = textoMensagem;
    divMsgEmissorResposta.appendChild(p);
    
    divEmissorResposta.appendChild(divMsgEmissorResposta);
    
    var telaMensagem = document.getElementById("telaMensagem");
    telaMensagem.appendChild(divEmissorResposta);
}

function clearCss() {
    var telaMensagem = document.getElementById("telaMensagem");
    var br = docment.createElement('br');
    br.setAttribute('clear','both');
    telaMensagem.appendChild(br);
}


