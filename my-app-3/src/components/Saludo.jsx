import React, { Fragment } from 'react'

const Saludo = (props) => {
    console.log(props)
    return (
       <Fragment>
           <h2>Hola! {props.persona} edad {props.edad}</h2>
       </Fragment> 
    );
}
 
export default Saludo;