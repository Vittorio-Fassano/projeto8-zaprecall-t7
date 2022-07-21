import React from "react";
import party from "../assets/party.png";
import sad from "../assets/sad.png";

export default function Resultado(props) {

    const { contagem, status, perguntas, restartGame } = props;

    let finish = status.length === perguntas;
    let happyMessage = true;

    for (let i = 0; i < status.length; i++) {
        if (status[i] === "red") {
            happyMessage = false;
        }
    }

    return (
        <div className="footer-resultado">

            {finish && happyMessage && <p className="emojiText"><img className='emoji' src={party} alt="party" /><strong>Parabéns!</strong><br /><br />Você não esqueceu de <br /> nenhum flashcard!<br /><br /></p>}
            {finish && !happyMessage && <p className="emojiText"><img className='emoji' src={sad} alt="sad" /><strong>Putz...</strong><br /><br />Ainda faltam alguns... <br />Mas não desanime!<br /><br /></p>}
            
            <p className="emojiText">
                {contagem}/4 CONCLUÍDOS <br />
                {status.map(element => {
                    if (element === "green") {
                        return <ion-icon name="checkmark-circle" style={{ color: "#2FBE34" }}></ion-icon>
                    } else if (element === "red") {
                        return <ion-icon name="close-circle" style={{ color: "#FF3030" }}></ion-icon>
                    } else if (element === "orange") {
                        return <ion-icon name="help-circle" style={{ color: "#FF922E" }}></ion-icon>
                    }
                })}
            </p>

            {finish && <button className="restart" onClick={restartGame}>REINICIAR RECALL</button>}
        </div>
    );
}