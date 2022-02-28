import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PokemonDetail from './components/pokemon-detail';
import CountriesList from './pages/countries-list';
import CountryDetail from './pages/country-detail';
import Footer from './pages/ejercicios-components/footer-ej/footer';
import Header from './pages/ejercicios-components/header-ej';
import HelloPage from './pages/ejercicios-components/hello-page-ej/hello-page';
import PokemonFetch from './pokemon-fetch-lurn/pokemon-fetch';
import React from 'react';


function App() {
  return (
    <React.Fragment>
      <PokemonFetch></PokemonFetch>

    </React.Fragment>

    // <PokemonDetail></PokemonDetail>
    // <BrowserRouter>
    //   <Header></Header>
    //   <main className="main">
    //     <Routes>
    //       <Route path='/hello' element={<HelloPage></HelloPage>}></Route>
    //       <Route path='/countries' element={<CountriesList></CountriesList>}></Route>
    //       <Route path='/countries/:code' element={<CountryDetail></CountryDetail>}></Route>
    //       <Route path='/pokemon/:id' element={<PokemonDetail></PokemonDetail>}></Route>
    //     </Routes>
    //   </main>
    //   <Footer></Footer>
    // </BrowserRouter>


    // <BrowserRouter>
    //   <Header></Header>
    //   <main>
    //     <Routes>
    //       <Route path='/hello' element={<HelloPge></HelloPge>}></Route>
    //       <Route path='/countries' element={<CountriesList></CountriesList>}></Route>
    //       <Route path='/countries/:code' element={<CountryDetail></CountryDetail>}></Route>
    //     </Routes>
    //   </main>
    //   <p>Esto es despues de las paginas</p>
    // </BrowserRouter>

  );
}

export default App;
