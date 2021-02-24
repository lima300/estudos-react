import './TabelaProdutos.css';
import React from 'react';
import produtos from '../../data/produtos';

export default (props) => (
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Nome</th>
        <th>Preço</th>
      </tr>
    </thead>
    <tbody>
      {produtos.map((produto) => (
        <tr key={produto.id}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td> R$ {produto.preco.toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
