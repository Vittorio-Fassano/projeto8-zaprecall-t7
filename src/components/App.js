import React from "react";
import ReactDOM from 'react-dom';
import TelaInicial from "./TelaInicial";

import "../css/reset.css";
import "../css/style.css";




export default function App() {

    return (
        <>
            <TelaInicial />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));