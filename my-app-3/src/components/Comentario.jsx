import React, { Fragment } from 'react'

const Comentario = (props) => {
    return (  
        <Fragment>
            <h1>Comentario</h1>
            <hr/>
            <div className="media">
                <img src={props.sujeto.urlImagen} alt="" className="mr-3"/>
                <div className="media-body">
                    <h5 className="mt-0">{props.sujeto.nombre}</h5>
                    {props.sujeto.texto}
                </div>
            </div>
        </Fragment>
        
    );
}
 
export default Comentario;