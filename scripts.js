//chave para conexão da api
const key = "d19690ebe67cdb0b835b3e920d24c886"

function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}

async function buscarCidade(cidade){
    //conexão com a api
    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    colocarDadosNaTela(dados)   
}

function colocarDadosNaTela(dados ){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name 
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + " % de umidade"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}
