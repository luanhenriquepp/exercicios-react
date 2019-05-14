import ReactDOM from 'react-dom';
import React from 'react';
import PrimeiroComponent from './components/PrimeiroComponent';
import {CompA , CompB} from "./components/SegundoComponent";

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        <CompA valor="Olá eu sou o A!"/>
        <CompB valor="Olá eu sou o B!"/>
        <PrimeiroComponent valor="Bom Dia!"/>
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

