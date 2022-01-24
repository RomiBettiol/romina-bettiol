import React from "react";
import "./ParteInicial.css"

const ParteInicial = ({greeting}) => {
    return(
        <div className="itemListContainer">
            <p>{greeting}</p>
        </div>
    );
};

export default ParteInicial;