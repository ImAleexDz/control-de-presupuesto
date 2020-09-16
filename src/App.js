import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import Control from './components/Control'

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

  useEffect(() => {
    if(crearGasto) {
      setGastos([
        ...gastos,
        gasto
      ]);

      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      setCrearGasto(false)
    }
  }, [gasto, crearGasto, gastos, restante])

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta
            ? (<Question
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setPregunta={setPregunta}
            />)
            : (
            <div className="row">
                <div className="one-half column">
                  <Form 
                    setGasto={setGasto}
                    setCrearGasto={setCrearGasto}
                  />
                </div>

                <div className="one-half column">
                  <List 
                    gastos={gastos}
                  />
                  <Control 
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
            </div>
            )
          }

        </div>
      </header>
    </div>
  );
}

export default App;
