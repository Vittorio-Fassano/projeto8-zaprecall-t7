import React from "react";
import ReactDOM from 'react-dom';
import TelaInicial from "./TelaInicial";

import "../css/reset.css";
import "../css/style.css";

export default function App() {
    
    const [visible, setVisible] = React.useState(true);
    const [contadorPerguntas, setContadorPerguntas] = React.useState(0);
    const [resultado, setResultado] = React.useState([]);

    function restartGame() {
        setVisible(true);
        setContadorPerguntas(0);
        setResultado([]);
    }

    return (
        <>
            <TelaInicial 
            visible={visible} setVisible={setVisible} contadorPerguntas={contadorPerguntas} setContadorPerguntas={setContadorPerguntas}
            resultado={resultado} setResultado={setResultado} restartGame={restartGame}
            />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));