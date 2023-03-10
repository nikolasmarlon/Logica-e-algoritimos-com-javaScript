//Restaurante js

//Função para calcular e mostrar o total
function calcularPreco() {
    //Referência aos elementos do programa
    var inPreco = document.getElementById('inPreco')
    var inConsumo = document.getElementById('inConsumo')
    var outValor = document.getElementById('outValor')

    //referência para a div de resposta que está oculta
    var mostrarTotal = document.getElementById('mostrarTotal')

    //Obter conteúdo dos campos
    var preco = Number(inPreco.value)
    var consumo = Number(inConsumo.value)

    //calcula o total 
    var total = (preco / 1000 ) * consumo

    //Altera o conteúdo dos Títulos de resposta   
    outValor.textContent = `Total R$: ${total.toFixed(2)}`

    //mudar css para apresentar bloco novamente
    mostrarTotal.style.display = 'block'
}


//Referência para o botão
var btCalcular = document.getElementById('btCalcular')

//Escutanto evento para disparar função
btCalcular.addEventListener('click', calcularPreco)