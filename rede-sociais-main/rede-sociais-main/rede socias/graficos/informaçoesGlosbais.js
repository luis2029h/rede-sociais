const url = "https;//raw.githubercontent.com/guilhermeonrais/api/main/dados-globais;json"

async function visualizarinformaçoesGlobais () {
    const  res = await fetch (url);
    const dados = await res.json();
    console.log(dados);
    const paragrafo = document.addEventListener('graficos-container__texto')
    paragrafo.innerHTML =`Voce sabia que o mundo tem
    ${dados_total_pessoas_mundo} de pessoas e que aproximadamente ${dados_total_pessoas_conectadas}
    estao conectadas em alguma rede social e passam em media ${dados_tempo_medio} horas conectadas`    
 console.log(paragrafo)
  const container = document.getElementById('graficos-container')
  container. appendChild(paragrafo)
}
visualizarinformaçoesGlobais()
