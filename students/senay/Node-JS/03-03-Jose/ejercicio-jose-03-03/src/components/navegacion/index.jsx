/**
 * Para ello debemos crearnos una app react que mostrara información de usuarios,  para la 
 * maquetación usaremos React-Boostrap ,esta tendrá la siguiente estructura:
 * 
Una pagina Listado  la cual  mostrara en Cards el  username y el pais de todos los usuarios o no 
mostrara nada si no existieran aun, también tendrá una navegación hacia la pagina  de registro.

Una pagina para darse de alta  la cual será un formulario donde introduciremos nuestro nombre, 
apellido, nombre de usuario, email , una url de imagen y el pais.

Una pagina de details donde se mostrara toda la información incluida la imagen del usuario,
a esta accederemos a darle click a la card.

Nuestra Card del Listado deben tener dos botones uno de delete y otro de update, en el de delete 
podremos borrar al usuario de nuestro backend y en el de update debe navegar hasta nuestro formulario de registro donde veremos  los datos de ese usuario en los input y actualizaremos los datos.
 */

import { Nav } from 'react-bootstrap';


function Navegacion() {
    return (
        <Nav className='navigation__container d-flex justify-content-between'>
            <div className="navigation__container--home">
                <Nav.Item>
                    <Nav.Link href="home">Home</Nav.Link>
                </Nav.Item>
            </div>

            <div className="navigation__container--users-actions d-flex">
                <Nav.Item variant="primary">
                    <Nav.Link className=''>Log In</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href='form'>Registration</Nav.Link>
                </Nav.Item>
            </div>
            {/* <Button variant="primary">Log In</Button> */}
        </Nav>
    );
}

export default Navegacion;