import React from "react";
import setinha from "../assets/setinha.png";

export default function Pergunta(props) {

    const { infos, contagem, /*addResult,*/ idx } = props;

    const [telas, setTelas] = React.useState("tela1");
    const [corPerguntas, setCorPerguntas] = React.useState("");

    if (telas === "tela1") {
        return (
            <div className={`Pergunta ${corPerguntas}`}>
                <p>Pergunta {idx}</p>
                {corPerguntas === "" && <ion-icon name="play-outline" onClick={() => setTelas("tela2")}></ion-icon>}
                {corPerguntas === "green" && <ion-icon name="checkmark-circle"></ion-icon>}
                {corPerguntas === "red" && <ion-icon name="close-circle"></ion-icon>}
                {corPerguntas === "orange" && <ion-icon name="help-circle"></ion-icon>}
            </div>
        );

    } else if (telas === "tela2") {
        return (
            <div className="texto-pergunta">
                <p>Pergunta {infos.Pergunta}</p>
                <img className="seta-vira" src={setinha} alt="setinha" onClick={() => setTelas("tela3")}></img>
            </div>
        );

    } else if (telas === "tela3") {
        return (
            <div className="respostas">
                <p>{infos.Resposta}</p>
                <div className="botoes">
                    <button className="red" onClick={() => {
                        setTelas("tela1");
                        setCorPerguntas("red");
                        contagem();
                        /*addResult("red");*/
                    }
                    }>Não lembrei</button>

                    <button className="orange" onClick={() => {
                        setTelas("tela1");
                        setCorPerguntas("orange");
                        contagem();;
                        /*addResult("orange");*/
                    }
                    }>Quase não lembrei</button>

                    <button className="green" onClick={() => {
                        setTelas("tela1");
                        setCorPerguntas("green");
                        contagem();
                        /*addResult("green");*/
                    }
                    }>Zap!</button>

                </div>
            </div>
        );
    }
}