

function mostrarMensagem() {
    var nome = document.getElementById('nome').value
    document.getElementById('resposta').textContent = "Olá, " + nome
}


//criando referência ao botão com id (mostrar)
var mostrar = document.getElementById('mostrar')

//adiciona para o botão 'mostrar' um Listener (ouvinte) para o evento click
mostrar.addEventListener('click', mostrarMensagem)