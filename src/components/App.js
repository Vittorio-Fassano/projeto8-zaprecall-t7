import React from "react";
import ReactDOM from 'react-dom';
import TelaInicial from "./TelaInicial";

import "../css/reset.css";
import "../css/style.css";


export default function App() {
    
    const [visible, setVisible] = React.useState(true);
    const [contadorPerguntas, setContadorPerguntas] = React.useState(0);
    /*const [statusResult, setStatusResult] = React.useState([]);

    function restartGame() {
        setVisible(true);
        setQuestionCounter(0);
        setStatusResult([]);
    }*/

    return (
        <>
            <TelaInicial visible={visible} setVisible={setVisible} contadorPerguntas={contadorPerguntas} setContadorPerguntas={setContadorPerguntas}/>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));