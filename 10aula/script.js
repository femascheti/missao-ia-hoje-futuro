const textoPergunta = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const resultadoTexto = document.querySelector(".texto-resultado");

const perguntas = [
    {
        pergunta: "Pergunta 1: Depois de uma aula sobre ferramentas de IA, !!você teve que escrever um trabalho sobre o uso de tecnologia em sala de aula. O que !!você faz? ",
        opcoes: [
            {
                texto: "Alternativa 1: Defendo a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas",
                afirmacao: "Afirmação 1: Impulsiona inovações e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Alternativa 2: Me preocupo com as pessoas que perderão seus empregos para máquinas e defendedo a importância de proteger os trabalhadores.",
                afirmacao: "Afirmação 2:Criou grupo de estudos coletivos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            },
        ]
    },
    {
        pergunta: "Pergunta 2: Depois de uma aula sobre ferramentas de IA, !!você teve que escrever um trabalho sobre o uso de tecnologia em sala de aula. O que !!você faz? ",
        opcoes: [
            {
                texto: " Alternativa 3: Defendo a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas",
                afirmacao: "Afirmação 3:Impulsiona inovações e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Alternativa 4: Me preocupo com as pessoas que perderão seus empregos para máquinas e defendedo a importância de proteger os trabalhadores.",
                afirmacao: "Afirmação 4:Criou grupo de estudos coletivos entre trabalhadores para discutir meios de utilização de IA de forma ética." 
            },
        ]
    },
    {
        pergunta: "Pergunta 3: Depois de uma aula sobre ferramentas de IA, !!você teve que escrever um trabalho sobre o uso de tecnologia em sala de aula. O que !!você faz? ",
        opcoes: [
            {
                texto: "Alternativa 5: Defendo a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas",
                afirmacao: "Afirmação 5: Impulsiona inovações e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Alternativa 6: Me preocupo com as pessoas que perderão seus empregos para máquinas e defendedo a importância de proteger os trabalhadores.",
                afirmacao: "Afirmação 6: Criou grupo de estudos coletivos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            },
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historia = "";


function mostraPerguntaAtual() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    textoPergunta.textContent = perguntaAtual.pergunta;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const opcao of perguntaAtual.opcoes) {
        const elementoOpcoes = document.createElement("button");
        elementoOpcoes.textContent = opcao.texto; 
        elementoOpcoes.addEventListener("click", () => respostaSelecionada(opcao)); 
        caixaAlternativas.appendChild(elementoOpcoes);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const resposta = opcaoSelecionada.afirmacao;
    historia += resposta + " "; // mudar = para += isso vai fazer concatenar as duas coisas
    atual++;
    mostraPerguntaAtual();
}

function mostraResultado() {
    textoPergunta.textContent = "Essa é uma história de..."; 
    caixaAlternativas.textContent = ""; 
    resultadoTexto.textContent = historia; 
}

mostraPerguntaAtual();
