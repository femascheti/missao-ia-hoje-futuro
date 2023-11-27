const textoPergunta = document.getElementById("perguntas");
const caixaOpcoes = document.getElementById("caixa-opcoes");
const resultadoTexto = document.getElementById("resultado");
const elementoResultado = document.getElementById("caixa-resultado");

const perguntas = [
    {
        pergunta: "Depois de uma aula sobre ferramentas de IA, !!você teve que escrever um trabalho sobre o uso de tecnologia em sala de aula. O que !!você faz? ",
        opcoes: ["Utilizo uma ferramenta de busca como o Bing Copilot para buscar informações relevantes para meu trabalho.",
            "Escrevo o trabalho com base nos meus conhecimentos sobre o tema."]
    },
    {
        pergunta: "Depois de uma aula sobre ferramentas de IA, !!você teve que escrever um trabalho sobre o uso de tecnologia em sala de aula. O que !!você faz? ",
        opcoes: ["Utilizo uma ferramenta de busca como o Bing Copilot para buscar informações relevantes para meu trabalho.",
            "Escrevo o trabalho com base nos meus conhecimentos sobre o tema."]
    },
    {
        pergunta: "Depois de uma aula sobre ferramentas de IA, !!você teve que escrever um trabalho sobre o uso de tecnologia em sala de aula. O que !!você faz? ",
        opcoes: ["Utilizo uma ferramenta de busca como o Bing Copilot para buscar informações relevantes para meu trabalho.",
            "Escrevo o trabalho com base nos meus conhecimentos sobre o tema."]
    },
];

let atual = 0;
let perguntaAtual;


function mostraPerguntaAtual() {
    perguntaAtual = perguntas[atual];
    textoPergunta.textContent = perguntaAtual.pergunta;
    caixaOpcoes.textContent = "";
    mostraOpcoesAtuais();
}