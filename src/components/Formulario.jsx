import React, { useState } from 'react';

const Formulario = ( { busqueda, setBusqueda, setConsulta }) => {

    //Extraer ciudad y pais

    const { ciudad, pais } = busqueda;

    //Funcion que coloca los elementos en el state

    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //Error

    const [error, guardarError] = useState(false); 

    //Cuando el usuario hace click en el submit

    const handleSubmit = e => {
        e.preventDefault();

        //Validad

        if (ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true);
            return;
        }
        else {
            guardarError(false);
            setConsulta(true);
        }
    }

    return ( 
        <form onSubmit={handleSubmit} className="formulario">
            <div className="input-field col s12">
                <input 
                    type="text" 
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Cuidad:</label>
            </div>
            <div className="input-field col s12">
                <select 
                    name="pais" 
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                    >

                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>

                </select>
                <label htmlFor="pais">Pais:</label>
            </div>

            <div className="input-field col s12">
                <input  
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>

        </form>
     );
    
}

export default Formulario;