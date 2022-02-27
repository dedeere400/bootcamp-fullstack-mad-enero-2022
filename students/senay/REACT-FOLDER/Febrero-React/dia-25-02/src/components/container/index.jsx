import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap"
import './style.css';
import TwoAndTwo from '../div-two-rows';


/**
 * 2 Crea un div de una fila y   dos columnas que cuando el tamaño de tu pantalla este por debajo de 1000px 
 * se ponga una debajo de otra.
 */

function ConatinerNavbar() {
    return (
        <main className="main">
            <Row>
                <Col lg={6}>Columna Numero 1</Col>
                <Col lg={6}>Columna Numero 2</Col>
            </Row>

            <TwoAndTwo></TwoAndTwo>
        </main>
    );
}

export default ConatinerNavbar;