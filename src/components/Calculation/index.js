import React, { useEffect } from 'react';
import CalcAccordion from '../CalcAccordion';
import PropTypes from 'prop-types';

function Calculations(props) {
  const { formulars } = props;
  return (
    <div className='calculation-container'>
      {formulars.map((f) => (
        <CalcAccordion
          key={f.id}
          expression={f.expression}
          name={f.name}
          operands={f.operands}
        />
      ))}
    </div>
  );
}

Calculations.propTypes = {
  formulars: PropTypes.any,
};

export default Calculations;
