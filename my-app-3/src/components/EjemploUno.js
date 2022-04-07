import React, { Fragment, useState } from 'react';
import {useForm} from 'react-hook-form'

const EjemploUno = () => {
    
    const {register, errors, handleSubmit} = useForm();

    const [Entradas, setEntradas] = useState([])

    const onSubmit = (data,e) => {
        console.log(data)
        setEntradas([
            ...Entradas,
            data
        ])
        e.target.reset()
    }
    
    return (  
        <Fragment>
            <h1>Ejemplo #1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="titulo"
                    placeholder="Ingrese titulo"
                    className="form-control my-2"
                    ref={
                        register({
                            required: {value:true, message: 'Campo obligatorio'},
                            minLength: {value: 2, message: 'Minimo 2 letras'}
                        })
                    }
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.titulo?.message}
                </span>
                <input
                    name="descripcion"
                    placeholder="Ingrese descripcion"
                    className="form-control my-2"
                    ref={
                        register({
                            required: {value:true, message: 'Campo obligatorio'},
                            minLength: {value: 2, message: 'Minimo 2 letras'}
                        })
                    }
                ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.descripcion?.message}
                </span>
                <button className="btn btn-primary">Enviar</button>
            </form>
            <ul>
                {
                    Entradas.map((item, index) =>{
                        return <li key={index}>{item.titulo} - {item.descripcion}</li>  
                    } 
                          
                    )
                }
            </ul>
        </Fragment>
    );
}
 
export default EjemploUno;