import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import { Accordion } from 'react-bootstrap';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import ConatinerNavbar from '../container';


function Home() {
    return (
        <>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap NavBar</Navbar.Brand>
                <Button variant="primary">Primary</Button>
                <Button variant="outline-secondary">Secondary</Button>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


                <ConatinerNavbar>

                </ConatinerNavbar>

            </Container>
        </>

    );
}

export default Home;