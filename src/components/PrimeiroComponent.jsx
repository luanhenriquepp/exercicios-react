import React from 'react';

let isLegal = true;

export default (props) => (
    <div>
        <h1>{props.valor}</h1>
        <h2>{1 + 1}</h2>
        <p>Legal? {isLegal ? 'Sim' : 'Não'}</p>
    </div>
)

// export default (props) => (
//     <div>
//         <h1>Primeiro Component! (Arrow function)</h1>
//     </div>
// )

/*export default () => {
    return <h1>Primeiro Component!</h1>
}*/

