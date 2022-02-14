// import React from 'react';
// import './style.css';
// import logoTipo from '../../assets/images/mad-tree.jpg';
// import Button from '../button';

function Card() {
    return (
        <section className='container'>
            <header className='header'>
                <img src={logoTipo} className='header--img' alt='logotipo mad tree'></img> 
            </header>
            <div className='container__body'>
                <h4>MadTree Brewing</h4>
                <p className='parrafo'>Type: regional</p>
                <p className='parrafo'>City: conconnati</p>
                <p className='parrafo'>State: Ohio</p>
                <p className='parrafo'>Country: Unites States</p>
                <Button></Button>
            </div>
        </section>
    );
}

export default Card;