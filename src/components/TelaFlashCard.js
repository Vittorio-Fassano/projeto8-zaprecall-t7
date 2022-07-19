import React from "react";
import logo_pequeno from "../assets/logo-pequeno.png";
/*import Result from "./Result";
import Question from "./Question";*/

export default function TelaFlashCard(props) {

    /*const { counterQuestion, setQuestionCounter, statusResult, setStatusResult, restartGame } = props;*/

    /*const questions = [
        { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
        { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __ ", answer: "letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    ];*/

    /*const increment = () => { setQuestionCounter(counterQuestion + 1) };
    const addResult = (result) => { setStatusResult([...statusResult, result]) };*/

    return (
        <div className="TelaFlashCard">
            <header>
                <img src={logo_pequeno} alt="logo-pequeno"></img>
                <h1>ZapRecall</h1>
            </header>
            <main className="questões">
                
            </main>
            <footer>
                teste   
            </footer>
        </div>
    );
}

/*function comparador() {
    return Math.random() - 0.5;
}*/