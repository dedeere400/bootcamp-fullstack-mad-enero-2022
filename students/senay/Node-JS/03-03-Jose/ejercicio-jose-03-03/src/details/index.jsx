import { Nav, NavLink } from "react-bootstrap";


function Details() {
    return (
        <Nav>
            <Nav.Item variant="primary">
                <NavLink href='form'>Update User Info</NavLink>
                <NavLink href='form'>Delete User</NavLink>
            </Nav.Item>

        </Nav>
    );
}

export default Details;