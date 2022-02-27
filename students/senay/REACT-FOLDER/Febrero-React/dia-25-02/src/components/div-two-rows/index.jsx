import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './style.css';
/**
 *  
    3. Crea un div de dos filas y dos columnas cada una, una fila deberá permanecer con las dos columnas 
    en todos sus breakpoints  y la otra fila cuando el tamaño de tu pantalla sea menos de 570px debera 
    ponerse una debajo de otra.
 */

function TwoAndTwo() {
    return (
        <div className="section">
            <Row>
                <Col>Columna Numero 1 de Fila 1</Col>
                <Col>Columna Numero 2 de Fila 1</Col>
            </Row>
            <Row>
                <Col sm={6}>Columna Numero 1 de Fila 2</Col>
                <Col sm={6}>Columna Numero 2 de Fila 2</Col>
            </Row>
        </div>
    );
}

export default TwoAndTwo;