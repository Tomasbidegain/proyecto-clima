import React from 'react';
import propTypes from 'prop-types';

const Clima = ( { resultado } ) => {
 
    const { name, main, wind } = resultado;
    const kelvin = 273.15;

    if (!name) return null;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
            <h2>El clima de {name} es: </h2>
               <p className="temperatura">
                {parseFloat( main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                {wind.speed} <span>Km;</span>
               </p>
            </div>
        </div>
     );
}

export default Clima;