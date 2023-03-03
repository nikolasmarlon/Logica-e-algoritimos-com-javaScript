
//função para mostrar a mensagem
function mostrarMensagem() {
    var nome = document.getElementById('nome').value
    document.getElementById('resposta').textContent = 'Olá ' + nome
}

//referencia ao elemento que vai chamr a função (mostrarMensagem())
var mensagem = document.getElementById('mostrar')

//chama a função ao disparar o evento click **OBs. nao por parenteses, pois chama a função antes de disparar o evento
mensagem.onclick = mostrarMensagem


//Essa abordagem é conhecida como rotina de tratamento de eventos DOM. (Document Object Model)