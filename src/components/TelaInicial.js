import React from "react";
import TelaFlashCard from "./TelaFlashCard";
import logo from "../assets/logo.png";

export default function TelaInicial(props) {

    const { visible, setVisible, contadorPerguntas, setContadorPerguntas, /*statusResult, setStatusResult,*/ restartGame } = props;

    return (
        visible === true 
            ?
            <div className="home">
                <img src={logo} alt="logo"></img>
                <h1>ZapRecall</h1>
                <button onClick={() => setVisible(false)}>Iniciar Recall!</button>
            </div>
            :
            <TelaFlashCard contadorPerguntas={contadorPerguntas} setContadorPerguntas={setContadorPerguntas} restartGame={restartGame} /*statusResult={statusResult} setStatusResult={setStatusResult}*/  /> 
    );
}