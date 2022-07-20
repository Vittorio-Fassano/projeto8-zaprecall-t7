import React from "react";
import logo_pequeno from "../assets/logo-pequeno.png";
import Pergunta from "./Pergunta";
/*import Result from "./Result";*/

export default function TelaFlashCard(props) {

    /*const { counterQuestion, setQuestionCounter, statusResult, setStatusResult, restartGame } = props;*/

    const Perguntas = [
        { Pergunta: "O que é JSX?", Resposta: "Uma extensão de linguagem do JavaScript" },
        { Pergunta: "O React é __", Resposta: "uma biblioteca JavaScript para construção de interfaces" },
        { Pergunta: "Componentes devem iniciar com __ ", Resposta: "letra maiúscula" },
        { Pergunta: "Podemos colocar __ dentro do JSX", Resposta: "expressões" },
    ];

    /*const increment = () => { setQuestionCounter(counterQuestion + 1) };
    const addResult = (result) => { setStatusResult([...statusResult, result]) };*/

    return (
        <div className="TelaFlashCard">
            <header>
                <img src={logo_pequeno} alt="logo-pequeno"></img>
                <h1>ZapRecall</h1>
            </header>
            <main className="Perguntas">
                {Perguntas.sort(SortearCarta).map((elemento, index) => 
                <Pergunta infos={elemento} /*increment={increment} addResult={addResult}*/ key={index + 1} />)}
            </main>
            <footer>
                teste   
            </footer>
        </div>
    );
}

function SortearCarta() {
    return Math.random() - 0.5;
}

