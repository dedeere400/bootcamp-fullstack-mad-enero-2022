import { Card, Nav, NavItem, NavLink } from "react-bootstrap";

function Cards() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                {/* <Card.Img variant="bottom" src="https://www.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_7074311.htm#query=avatar&position=1&from_view=keyword" /> */}
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Nav>
                    <NavItem>
                        <NavLink href='details'>Details</NavLink>
                    </NavItem>
                </Nav>
                {/* <Button variant="primary">Details</Button> */}
            </Card.Body>
        </Card>
    );
}

export default Cards;