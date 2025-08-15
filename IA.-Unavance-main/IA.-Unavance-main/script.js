const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector("caixa-alternativas");
const caixaresultado=document.querySelector(".caixa-resultado");
const caixaResultado=document.querySelector(".texto-resultado");

const perguntas =[
    {
        enunciado:"Assim que saiu do colegio você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual é seu primeiro pensamento?",
        alternativas:[
            {     
            texto:"Isso é assustador!",
            afirmacao:"No inicio, eu ficaria com medo do que essa tecnologia pode fazer."        
    },
    {
        texto:"Isso é incrível!",
        afirmacao:"Sempre quis saber como usar uma IA em meu dia a dia."    
    }
        ]
    }   
]           