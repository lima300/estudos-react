import './App.css';
import React from 'react';

import Primeiro from './components/basicos/Primeiro.jsx';
import ComParametro from './components/basicos/ComParametro.jsx';
import Fragmento from './components/basicos/Fragmento.jsx';
import Aleatorio from './components/basicos/Aleatorio.jsx';
import Card from './components/layout/Card.jsx';
import Familia from './components/basicos/Familia.jsx';
import FamiliaMembro from './components/basicos/FamiliaMembro.jsx';
import ListaAlunos from './components/repeticao/ListaAlunos.jsx';
import TabelaProdutos from './components/repeticao/TabelaProdutos.jsx';
import ParOuImpar from './components/condicional/ParOuImpar.jsx';
import UsuarioInfo from './components/condicional/UsuarioInfo.jsx';
import DiretaPai from './components/comunicacao/DiretaPai.jsx';
import IndiretaPai from './components/comunicacao/IndiretaPai.jsx';
import Input from './components/formulario/Input.jsx';
import Contador from './components/contador/Contador.jsx';

export default (props) => {
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#12 - Contador" color={getRandomColor()}>
          <Contador numeroInicial={10}></Contador>
        </Card>

        <Card titulo="#11 - Componente Controlado" color={getRandomColor()}>
          <Input></Input>
        </Card>

        <Card titulo="#10 - Comunicação Direta" color={getRandomColor()}>
          <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="#09 - Comunicação Direta" color={getRandomColor()}>
          <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="#08 - Condicional" color={getRandomColor()}>
          <ParOuImpar numero={21}></ParOuImpar>
          <UsuarioInfo usuario={{ nome: 'Fernando' }} />
        </Card>

        <Card titulo="#07 - Desafio Repetição" color={getRandomColor()}>
          <TabelaProdutos />
        </Card>

        <Card titulo="#06 - Repetição" color={getRandomColor()}>
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 - Componente com Filhos" color={getRandomColor()}>
          <Familia sobrenome="Lima">
            <FamiliaMembro nome="Otávio" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Laura" />
          </Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatório" color={getRandomColor()}>
          <Aleatorio min={5} max={10} />
        </Card>

        <Card titulo="#03 - Fragmento" color={getRandomColor()}>
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com parametro" color={getRandomColor()}>
          <ComParametro
            titulo="Segundo componente"
            subtitulo="Muito legal!"
          ></ComParametro>
        </Card>

        <Card titulo="#01 - Primeiro" color={getRandomColor()}>
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
};
