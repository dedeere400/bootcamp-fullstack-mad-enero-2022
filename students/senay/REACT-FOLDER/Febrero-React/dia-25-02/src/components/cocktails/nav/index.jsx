import { Nav } from "react-bootstrap";
import { NavItem } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Form } from "react-bootstrap";
import { FormCheck } from "react-bootstrap";

/**
 * Cocktails App
    Vamos a refactorizar nuestro App de cocktails valiéndonos de la librería de react-boostrap y de los
custom Hooks.
1. la navegación deberá ser un componente Nav responsive con un dropdown y un select como en la imagen,
usando solo componentes de Boostrap.
2.Las cards deberan  ser Cards de los componentes de react-bootsrap.

3. Las paginas deberan estar dentro de componentes containers y deberan ser responsivas ver Container
en la documentacion.

4. El select deberá  cambiar de tema de light a dark usando los temas de react-boostrap y
valiendonos del Context.

5. la llamada de los fetch debe estar dentro de un custom Hooks que será el que llamemos en nuestros
componentes para coger los datos.
6. La pagina de home debera tener un carousel de imagenes de los componentes de boostrap.
7. Debera aparecer un spinner cuando se este cargando las paginas.
 */

/**  problema 2
 *      - crear el dropdown con select switch para el theme con iconos
 *      -aplicar flexbox
 *  problema 3... 
 *       - ve al container component
 *  problema 4 
 * 
 */
function NavCocktails() {
    return (
        <Nav className="d-flex justify-content-between align-items-center">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Mini Bar
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Cocktails</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Original Drinks</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <div>
                <Form className="d-flex">
                    <span>☀️ </span>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="🌙"
                    />
                </Form>

                {/* <Form>
                    <Form.Check

                        id="custom-switch"
                        label="☀️"
                    />
                </Form> */}
            </div>
            {/* <Nav.Item>
                <Nav.Link href="/home">Mini Bar</Nav.Link>
            </Nav.Item> */}
        </Nav>
    );
}

export default NavCocktails;
