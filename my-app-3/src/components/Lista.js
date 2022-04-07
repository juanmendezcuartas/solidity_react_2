import React, { Fragment, useState } from 'react';

const Lista = () => {

    const [arrayNumero, setNumero] =  useState([1,2,3,4,5,6,7])
    const [sumNum, setSumnum] = useState(8)
    const agregarElemento = () =>{
        setSumnum(sumNum + 1)
        console.log('click');
        setNumero([...arrayNumero, sumNum]);
    }
    return (  
        <Fragment>
            <h2>lista</h2>
            <button onClick={agregarElemento}>Agregar</button>
            {
                arrayNumero.map((item, index) => {
                    return <p key={index}>{item} - {index}</p>
                })
            }
        </Fragment>    
    );
}
 
export default Lista;
