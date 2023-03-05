//Revenda de veículos

//Função para calcular e mostrar promoção
function mostrarPromocao() {
    //Referência aos elementos do programa
    var inVeiculo = document.getElementById('inVeiculo')
    var inPreco = document.getElementById('inPreco')
    var outVeiculo = document.getElementById('outVeiculo')
    var outEntrada = document.getElementById('outEntrada')
    var outParcela = document.getElementById('outParcela')
    var outTotal = document.getElementById('outTotal')

    //Obter conteúdo dos campos
    var veiculo = inVeiculo.value
    var preco = Number(inPreco.value)

    
    //Calcula valor da entrada e das parcelas
    var entrada = preco * 0.5
    var parcela = (preco * 0.5) / 12

    //calcula o total 
    var total = entrada + (parcela * 12)

    //Altera o conteúdo dos Títulos de resposta
    outVeiculo.textContent = `Promoção: ${veiculo}`
    outEntrada.textContent = `Entrada de R$: ${entrada.toFixed(2)}`
    outParcela.textContent = `+ 12x de R$: ${parcela.toFixed(2)}`
    outTotal.textContent = `Total R$: ${total.toFixed(2)}`
}


//Referência para o botão
var btVerPromocao = document.getElementById('btVerPromocao')

//Escutanto evento para disparar função
btVerPromocao.addEventListener("click", mostrarPromocao)