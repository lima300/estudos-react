import './Contador.css';
import React from 'react';
import Display from './Display.jsx';
import Botoes from './Botoes.jsx';
import PassoForm from './PassoForm.jsx';

export default class Contador extends React.Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 1,
  };

  inc = () => {
    this.setState({ numero: this.state.numero + this.state.passo });
  };

  dec = () => {
    this.setState({ numero: this.state.numero - this.state.passo });
  };

  alterarPasso = (event) => {
    this.setState({ passo: +event.target.value });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} alterarPasso={this.alterarPasso} />
        <Botoes incrementar={this.inc} decrementar={this.dec} />
      </div>
    );
  }
}
