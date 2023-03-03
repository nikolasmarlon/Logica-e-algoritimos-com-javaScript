function converterDuracao () {
    //referências aos elementos
    var inTitulo = document.getElementById('inTitulo')
    var inDuracao = document.getElementById('inDuracao')
    var outTitulo = document.getElementById('outTitulo')
    var outResposta = document.getElementById('outResposta')


    //obtém conteúdos dos campos
    var titulo = inTitulo.value 
    var duracao = inDuracao.value


    //Math.floor arredonda para baixo o resultado da divisão
    var horas = Math.floor(duracao / 60)

    //% obtém o resto da divisão
    var minutos = duracao % 60 

    //altera o conteúdo dos parágrafos da resposta
    outTitulo.textContent = titulo
    outResposta.textContent = horas + "h e" + minutos + "m"
}

//referênvia ao botão btConverter
var btConverter = document.getElementById('btConverter')

//escuta o evento para carregar a função 
btConverter.addEventListener("click", converterDuracao)