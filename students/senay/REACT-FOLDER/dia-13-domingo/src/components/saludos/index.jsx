import React from "react";

function Saludos(props) {
    return (
        <React.Fragment>
            <h1>Saludo {props.name}</h1>
            {props.extended ?
                (<p>Bienvenido a estas clases de react alucinantes</p>) : ""}
        </React.Fragment>
    );
}

export default Saludos;
