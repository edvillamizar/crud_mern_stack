import React from 'react'
import { useParams } from 'react-router'
function EditarUsuario(){


    const params = useParams()

    return(
        <div>
            <h2>Editar usuario</h2>
            <h3>El ID del susuario es: {params.idusuario}</h3>
        </div>
    )
}

export default EditarUsuario