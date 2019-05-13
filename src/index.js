import ReactDOM from 'react-dom';
import React from 'react';
import PrimeiroComponent from './components/PrimeiroComponent';

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        <PrimeiroComponent/>
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

