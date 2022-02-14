import React from 'react';
import './style.css';
import Image from '../../assets/images/af.jpg';

function CountriesCardContainer() {
    return (
        <div className='CountriesCardContainer'>
            <div>
                <img className="CountriesCardContainer__img" src={Image} alt="Imagen del Pais" />
            </div>
            <section className='CountriesCardContainer__body'>
                <h3>Afganistan</h3>
                <p>Code: AF</p>
                <p>Dial Code: +93</p>
                <button className='CountriesCardContainer--btn'>Buy Tickets</button>
            </section>
        </div>
    )
}
export default CountriesCardContainer;