import React, {useState,Fragment}  from 'react';

const Contador = () => {

    const[numero, setNumero] = useState(1);
    const aumentar = () =>{
        console.log("me diste un click");
        setNumero(numero+1);
    }

    return ( 
        <Fragment>
            <h2>mi primer componente {numero}</h2>
            <button onClick={aumentar}>aumentar</button>
        </Fragment>
    );
}

export default Contador;