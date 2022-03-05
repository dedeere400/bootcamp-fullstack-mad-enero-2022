import { Form, Button, InputGroup, FormControl, Container } from "react-bootstrap";

function RegistrationForm() {
    return (
        <Container>
            <h1 className="text-center">Please fill the form to register</h1>
            <Form>
                <Form.Label>Name</Form.Label>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Enter your Name"
                        aria-label="name"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <Form.Label>Last Name</Form.Label>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Enter your last Name"
                        aria-label="lastName"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Your User Name"
                        aria-label="userName"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Label htmlFor="basic-url">Enter Your Avatar's URL</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                        https://
                    </InputGroup.Text>
                    <FormControl id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default RegistrationForm;