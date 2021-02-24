import React from 'react';

export default (props) => (
  <div>
    <div>Filho</div>
    <button
      onClick={(e) =>
        props.quandoClicar(
          'João',
          parseInt(Math.random() * 20, 10) + 50,
          Math.random() > 0.5
        )
      }
    >
      Fornecer Informações
    </button>
  </div>
);
