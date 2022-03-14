import React, {useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

//Los hooks son funciones predeterminadas que react nos proporciona para trabajar. Los hooks son cosas que dicen "use", por ejemplo: useEffect
export default function GifGrid({ categoria }) {

    // Renombramiento de data como imagenes
    const { data:imagenes,loading } = useFetchGifs(categoria);

    // Es importante poner los fragments: <> </>, porque el h3 está fuera de un div
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ categoria }</h3>

            {loading && <p className='animate__animated animate__flash'>Cargando...</p>}

            <div className='card-grid'>
                {
                    imagenes.map((img)=> (
                        <GifGridItem key={img.id} {...img}/>
                    ))
                }
            </div>
        </> 
    )
}
