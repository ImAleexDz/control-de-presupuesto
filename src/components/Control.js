import React, { Fragment } from 'react';
import { check } from '../helpers';
import PropTypes from 'prop-types';

const Control = ({presupuesto, restante}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={check(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
    )
}

Control.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default Control
