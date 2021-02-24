import './Mega.css';
import React, { useState } from 'react';

export default (props) => {
  const [numeros, setNumeros] = useState(Array(props.qtd || 6).fill(0));
  const [qtd, setQtd] = useState(props.qtd);

  function onQtd(event) {
    setQtd(+event.target.value);
  }

  function gerarNumeroNaoContido(min, max, array) {
    const numero = parseInt(Math.random() * (max + 1 - min) + min, 10);
    return array.includes(numero)
      ? parseInt(Math.random() * (max - min) + min, 10)
      : numero;
  }

  function megasena() {
    const arr = Array(qtd)
      .fill(0)
      .reduce((nums) => {
        const novo = gerarNumeroNaoContido(1, 60, nums);
        return [...nums, novo];
      }, [])
      .sort((a, b) => a - b);
    setNumeros(arr);
  }

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numeros.join(' ')}</h3>

      <div>
        <label htmlFor="qtdInput">Quantidade: </label>
        <input
          id="qtdInput"
          type="number"
          min="6"
          max="17"
          value={qtd}
          onChange={onQtd}
        />
      </div>
      <button onClick={megasena}>Sortear!</button>
    </div>
  );
};
