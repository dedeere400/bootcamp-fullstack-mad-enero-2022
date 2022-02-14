import './style.css';
import Header from '../header';
import CountriesCardContainer from '../countries-card-container';
import React from 'react';

function ContainerCard() {
    return (
        <React.Fragment>
            <Header></Header>
            <div className='container__card'>
                <CountriesCardContainer></CountriesCardContainer>
                <CountriesCardContainer></CountriesCardContainer>
                <CountriesCardContainer></CountriesCardContainer>
                <CountriesCardContainer></CountriesCardContainer>
            </div>
        </React.Fragment>
    )
}
export default ContainerCard;