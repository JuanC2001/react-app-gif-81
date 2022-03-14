import React from 'react'

export const GifGridItem = ( { id, title, url }) => {

    // Class no está permitido, se necesita poner ClassName en react 
    // Aplicación de la clase card para el borde de las imágenes
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={ url } alt={ title }/>
            <p>{title}</p>
        </div>
    )
}
