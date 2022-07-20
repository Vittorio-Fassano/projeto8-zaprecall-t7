import React from "react";
import setinha from "../assets/setinha.png";

export default function Pergunta(props) {

    const { infos, contagem, /*addResult,*/ idx } = props;

    const [questionScreen, setQuestionScreen] = React.useState("questionScreen1");
    const [questionColor, setQuestionColor] = React.useState("");

    if (questionScreen === "questionScreen1") {
        return (
            <div className={`Pergunta ${questionColor}`}>
                <p>Pergunta {idx}</p>
                {questionColor === "" && <ion-icon name="play-outline" onClick={() => setQuestionScreen("questionScreen2")}></ion-icon>}
                {questionColor === "green" && <ion-icon name="checkmark-circle"></ion-icon>}
                {questionColor === "red" && <ion-icon name="close-circle"></ion-icon>}
                {questionColor === "orange" && <ion-icon name="help-circle"></ion-icon>}
            </div>
        );

    } else if (questionScreen === "questionScreen2") {
        return (
            <div className="texto-pergunta">
                <p>Pergunta {infos.Pergunta}</p>
                <img className="seta-vira" src={setinha} alt="setinha" onClick={() => setQuestionScreen("questionScreen3")}></img>
            </div>
        );

    } else if (questionScreen === "questionScreen3") {
        return (
            <div className="questionAnswer">
                <p>{infos.Resposta}</p>
                <div className="btns">
                    <button className="red" onClick={() => {
                        setQuestionScreen("questionScreen1");
                        setQuestionColor("red");
                        contagem();
                        /*addResult("red");*/
                    }
                    }>Não lembrei</button>

                    <button className="orange" onClick={() => {
                        setQuestionScreen("questionScreen1");
                        setQuestionColor("orange");
                        contagem();;
                        /*addResult("orange");*/
                    }
                    }>Quase não lembrei</button>

                    <button className="green" onClick={() => {
                        setQuestionScreen("questionScreen1");
                        setQuestionColor("green");
                        contagem();
                        /*addResult("green");*/
                    }
                    }>Zap!</button>

                </div>
            </div>
        );
    }
}