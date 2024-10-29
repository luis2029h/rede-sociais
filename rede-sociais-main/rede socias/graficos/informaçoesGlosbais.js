const url = "https;//raw.githubercontent.com/guilhermeonrais/api/main/dados-globais;json"

async function visualizarinformaçoesGlobais () {
    const  res = await fetch (url);
    const dado = await res.json();
 console.log(dados)
}
visualizarinformaçoesGlobais()