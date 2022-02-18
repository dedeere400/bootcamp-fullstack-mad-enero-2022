import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelloPage from './pages/hello-page';
import Header from './components/header';
import CountriesList from './pages/countries-list';
import CountryDetail from './pages/country-detail';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Routes>
          <Route path='/hello' element={<HelloPage></HelloPage>}></Route>
          <Route path='/countries' element={<CountriesList />}></Route>
          <Route path='/countries/:code' element={<CountryDetail></CountryDetail>}></Route>
        </Routes>
      </main>
      <p>Esto es despues de las página</p>
    </BrowserRouter>
  );
}

export default App;
