import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';

function App() {

  
  //State del formulario
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: ""
  });
  
  const [ consultar, setConsulta] = useState(false)  ;
  
  const { ciudad, pais } = busqueda;

  const [resultado, setResultado] = useState({});
  
  useEffect(() => {
    const consultarApi = async () => {
      const apiKey = '229283d52a40ebb21bd8ba02cf780265'
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`
      
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      setResultado(resultado);
      setConsulta(false); 
    }

    consultarApi();

  }, [ciudad, consultar, pais])


  return (
    <>
      <Header 
        titulo="Clima Demo React"
      />
      <div className="contenedor-form">
            <div className="container">
                <div className="row">
                    <div className="col m6 s12">
                        <Formulario 
                        busqueda={busqueda}
                        setBusqueda={setBusqueda}
                        setConsulta={setConsulta}
                        />
                    </div>
                    <div className="col m6 s12">
                      <Clima 
                        resultado = {resultado}
                      />
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default App;
