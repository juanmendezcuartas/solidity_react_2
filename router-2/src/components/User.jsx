import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    //console.log(useParams())
    const {id} = useParams()

    const [pueblo, setPueblo] = useState([])

    useEffect(() => {
        // console.log('useEffect')
        const obtenerDatos = async () => {
        const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
        const user = await data.json()
        // console.log(users)
        setPueblo(user)
    }
        obtenerDatos()
    }, [id])

    

    return (
        <div>
            <h3>{pueblo.name} - {pueblo.team_bonus}</h3>
        </div>
    )
}

export default User
