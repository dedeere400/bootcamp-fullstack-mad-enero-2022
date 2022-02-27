import './App.css';
import Home from './components/home';
import { Container } from 'react-bootstrap';
import ContainerNav from './components/cocktails/container';



function App() {
  return (
    <Container>
      <ContainerNav></ContainerNav>
    </Container>

  );
}

export default App;
