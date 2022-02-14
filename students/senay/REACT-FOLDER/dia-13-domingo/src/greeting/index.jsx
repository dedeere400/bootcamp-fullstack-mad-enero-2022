import React from "react";




function Greeting(props) {
    return (
        <React.Fragment>
                <h1>hola {props.name}</h1>
                {props.extented ? <p>Bienvenido a estas clases de react alucinantes</p> : ''}
        </React.Fragment>
        
    )
}
export default Greeting;