import ReactDOM from 'react-dom';
import React from 'react';
import MultipleElement from "./components/MultipleElement";
import PrimeiroComponent from './components/PrimeiroComponent';
// import {CompA as A, CompB as B} from "./components/SegundoComponent";
import FamiliaPaixao from "./components/FamiliaPaixao";
import Familia from "./components/Familia";
import Membro from "./components/Membro";

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        <Familia>
            <Membro nome="Fulano" sobrenome="Ciclano"/>
            <Membro nome="Beltrano" sobrenome="De Tal"/>
        </Familia>
        <FamiliaPaixao/>

        {/*</FamiliaPaixao>*/}
        {/*<MultipleElement/>*/}
        {/*<A valor="Olá eu sou o A!"/>*/}
        {/*<B valor="Olá eu sou o B!"/>*/}
        {/*<PrimeiroComponent valor="Bom Dia!"/>*/}
    </div>
, elemento);


// ReactDOM.render(<h1>Olá Mundo</h1>, elemento);
/*
ReactDOM.render(
    <ul>
        <li>1) Luan</li>
        <li>1) João</li>
        <li>1) Mãe do João</li>
    </ul>
, elemento);*/

