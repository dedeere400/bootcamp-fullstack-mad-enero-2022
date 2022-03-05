import './App.css';
import { useEffect } from 'react';
import Navegacion from './components/navegacion';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import RegistrationForm from './components/registration-form';
import Cards from './components/cards';
import Details from './details';
import Listado from './components/listado';

function App() {



  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(r => r.json())
      .then(d => console.log(d))

  }, []);

  return (
    <BrowserRouter>
      <Navegacion></Navegacion>
      <Routes>
        <Route path='home' element={<Listado></Listado>}></Route>
        <Route path='form' element={<RegistrationForm></RegistrationForm>}></Route>
        <Route path='card' element={<Cards></Cards>}></Route>
        <Route path='details' element={<Details></Details>}></Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
