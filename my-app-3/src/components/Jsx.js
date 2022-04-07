import React,{Fragment} from 'react';

const Jsx = () => {

    const saludo = "Holaaaa";
    const temperatura = 10;

    return (  
        <Fragment>
            <h1>Hola JSX {saludo}</h1>

            <h2>frio o colaor</h2>
            {
                temperatura > 20 ? "verdadero: frio" : "falso: calor" 
            }
        </Fragment>
    );
}
 
export default Jsx;