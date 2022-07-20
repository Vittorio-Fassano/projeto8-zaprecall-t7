import React from "react";
import logo_pequeno from "../assets/logo-pequeno.png";
import Pergunta from "./Pergunta";
/*import Result from "./Result";*/

export default function TelaFlashCard(props) {

   const { contadorPerguntas, setContadorPerguntas,  /*statusResult, setStatusResult,*/ restartGame } = props;

    const perguntas = [
        { Pergunta: "O que é JSX?", Resposta: "Uma extensão de linguagem do JavaScript" },
        { Pergunta: "O React é __", Resposta: "uma biblioteca JavaScript para construção de interfaces" },
        { Pergunta: "Componentes devem iniciar com __ ", Resposta: "letra maiúscula" },
        { Pergunta: "Podemos colocar __ dentro do JSX", Resposta: "expressões" },
    ];

    const contagem = () => { setContadorPerguntas(contadorPerguntas + 1) };
    /*const addResult = (result) => { setStatusResult([...statusResult, result]) };*/

    return (
        <div className="TelaFlashCard">
            <header>
                <img src={logo_pequeno} alt="logo-pequeno"></img>
                <h1>ZapRecall</h1>
            </header>
            <main className="Perguntas">
                {perguntas.sort(sorteio).map((elemento, index) => 
                <Pergunta infos={elemento} contagem={contagem} /*addResult={addResult}*/ idx={index + 1} />)}
            </main>
            <footer>
                {`${contadorPerguntas}/4`}
                <button className="restart" onClick={restartGame}>REINICIAR RECALL</button>
            </footer>
        </div>
    );
}

function sorteio() {
    return Math.random() - 0.5;
}

