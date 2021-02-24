import React from 'react';

export default (props) => {
  const { max, min } = props;
  const resultado = parseInt(min + (max - min) * Math.random(), 10);
  return (
    <div>
      <h2>Valor Aleatorio</h2>
      <p>Valor Mínimo: {min}</p>
      <p>Valor Máximo: {max}</p>
      <p>
        <strong>Valor Escolhido: {resultado}</strong>
      </p>
    </div>
  );
};
