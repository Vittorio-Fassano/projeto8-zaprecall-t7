import React from "react";
import TelaFlashCard from "./TelaFlashCard";
import logo from "../assets/logo.png";

export default function TelaInicial(props) {

    const { visible, setVisible, /*counterQuestion, setQuestionCounter, statusResult, setStatusResult, restartGame*/ } = props;

    return (
        visible === true 
            ?
            <div className="home">
                <img src={logo} alt="logo"></img>
                <h1>ZapRecall</h1>
                <button onClick={() => setVisible(false)}>Iniciar Recall!</button>
            </div>
            :
            <TelaFlashCard /*counterQuestion={counterQuestion} setQuestionCounter={setQuestionCounter} statusResult={statusResult} setStatusResult={setStatusResult} restartGame={restartGame}*/ /> 
    );
}