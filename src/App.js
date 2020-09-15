import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/Form';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setPregunta] = useState(true);

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
                  <Form />
                </div>

                <div className="one-half column">
                  2
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
