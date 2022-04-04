import React from 'react'

//css
import "../proyectos/proyectos.css"
//componentes
import Trabajos from './Trabajos'
const Proyectos = () => {
    return (
        <div id='Portafolio'>
            <div>
                <p className='titulo'>Mis proyectos</p>
            </div>
            <Trabajos/>
        </div>
    )
}

export default Proyectos
