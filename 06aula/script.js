

const textoPergunta = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const resultadoTexto = document.querySelector("texto-resultado");

const perguntas = [
    {
        pergunta: "Pergunta 1: Depois de uma aula sobre ferramentas de IA, !!você teve que escrever um trabalho sobre o uso de tecnologia em sala de aula. O que !!você faz? ",
        opcoes: ["Opção 1: Utilizo uma ferramenta de busca como o Bing Copilot para buscar informações relevantes para meu trabalho.",
            "Opção 2: Escrevo o trabalho com base nos meus conhecimentos sobre o tema."]
    },
    {
        pergunta: "Pergunta 2: Depois de uma aula sobre ferramentas de IA, !!você teve que escrever um trabalho sobre o uso de tecnologia em sala de aula. O que !!você faz? ",
        opcoes: ["Opção 3: Utilizo uma ferramenta de busca como o Bing Copilot para buscar informações relevantes para meu trabalho.",
            "Opção 4: Escrevo o trabalho com base nos meus conhecimentos sobre o tema."]
    },
    {
        pergunta: "Pergunta 3: Depois de uma aula sobre ferramentas de IA, !!você teve que escrever um trabalho sobre o uso de tecnologia em sala de aula. O que !!você faz? ",
        opcoes: ["Opção 3: Utilizo uma ferramenta de busca como o Bing Copilot para buscar informações relevantes para meu trabalho.",
            "Opção 4: Escrevo o trabalho com base nos meus conhecimentos sobre o tema."]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPerguntaAtual() {
    perguntaAtual = perguntas[atual];
    textoPergunta.textContent = perguntaAtual.pergunta;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const opcao of perguntaAtual.opcoes) {
        const elementoOpcoes = document.createElement("button");
        elementoOpcoes.textContent = opcao;
        caixaAlternativas.appendChild(elementoOpcoes);
    }
}

mostraPerguntaAtual();