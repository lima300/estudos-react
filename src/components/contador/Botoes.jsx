import React from 'react';

export default (props) => (
  <div>
    <button onClick={props.incrementar}>+</button>
    <button onClick={props.decrementar}>-</button>
  </div>
);
