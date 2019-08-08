import React from 'react';
import Membro from "./Membro";

export default  props =>
    <div>
        <h1>Família Paixão</h1>
        <Membro nome="Luan" sobrenome="Paixão"/>
        <Membro nome="Cecília" sobrenome="Paixão"/>
    </div>


//exemplo
    //
    // <div>
    //     <h1>Família Paixão</h1>
    //     <Membro nome="Luan" sobrenome={props.sobrenome}/>
    //     <Membro nome="Cecília" sobrenome={props.sobrenome}/>
    // </div>
