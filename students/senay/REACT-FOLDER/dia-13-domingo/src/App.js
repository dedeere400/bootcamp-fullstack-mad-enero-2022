import React from "react";
import "./App.css";
import Contenido from "./components/contenido";




function App() {
const saludo = 'hola MuUU'
  return (
    <React.Fragment>
      <h1 {saludo}></h1>
      <Contenido></Contenido>
    </React.Fragment>

  );
}

export default App;
