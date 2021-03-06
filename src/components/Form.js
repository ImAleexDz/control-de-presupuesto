import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Form = ({setGasto, setCrearGasto}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        if(cantidad < 1 || isNaN(cantidad) || nombre === '') {
            setError(true);
            return;
        }

        setError(false);

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate(),
        }

        setGasto(gasto);
        setCrearGasto(true);
        setNombre('');
        setCantidad(0);

    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega aquí tus gastos</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" /> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value))}
                    />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    )
}

Form.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}

export default Form
