import React from 'react'

//css
import "../proyectos/proyectos.css"
//componentes
import Trabajos from './Trabajos'
const Proyectos = () => {
    return (
        <>
            <a name='proyectos'></a>
            <div>
                <p className='titulo'>Mis proyectos</p>
            </div>
            <Trabajos/>
        </>
    )
}

export default Proyectos
