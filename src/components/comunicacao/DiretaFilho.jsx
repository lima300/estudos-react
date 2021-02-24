import React from 'react';

export default (props) => (
  <div>
    <div>{props.nome}</div>
    <div>{props.idade}</div>
    <div>{props.nerd ? 'Verdadeiro' : 'Falso'}!</div>
  </div>
);
