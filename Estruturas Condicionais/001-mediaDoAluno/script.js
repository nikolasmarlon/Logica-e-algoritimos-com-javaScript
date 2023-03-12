
function calcularMedia(){
    //Referência aos elementos da página
    //Elementos de Entrada
    var entradaNome = document.getElementById('entradaNome')
    var entradaPrimeiraNota = document.getElementById('entradaPrimeiraNota')
    var entradaSegundaNota = document.getElementById('entradaSegundaNota')

    //Elementos de Saída
    var saidaSituacao = document.getElementById('saidaSituacao')
    var saidaMedia = document.getElementById('saidaMedia')


    //Obtém os conteúdos dos campos da página
    var nome = entradaNome.value
    var nota1 = Number(entradaPrimeiraNota.value)
    var nota2 = Number(entradaSegundaNota.value)

    //Calcula a média das notas
    var media = (nota1 + nota2) / 2


    //apresenta a média (altera o conteúdo do elemento saidaMedia)
    saidaMedia.textContent = `Média das notas: ${media.toFixed(1)}`

    //Cria a condição 
    if (media >= 7){
        //altera o texto e estilo do elemento saidaSituacao
        saidaSituacao.textContent = `Parabéns ${nome} você foi aprovado(a)`
        saidaSituacao.style.color = '#1f67ff'
    }else {
        saidaSituacao.textContent = `Ops ${nome} você foi reprovado(a)`
        saidaSituacao.style.color = '#ff0000'
    }
}

//Referência ao elemento btResultado (botao)
var btResultado = document.getElementById('btResultado')

//Captura o evento associado ao botão
btResultado.addEventListener('click', calcularMedia)