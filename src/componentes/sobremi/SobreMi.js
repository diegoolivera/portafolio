import React from 'react'

//css
import "../sobremi/sobremi.css"
//componentes
import Habilidades from '../habilidades/Habilidades';

const SobreMi = () => {
    return (
        <div id='aboutMe'>
            <p className='titulo'>Sobre Mi</p>
            <div className='descripcionSobre'>
                <p>
                   Soy una persona apasionada por la programacion,
                   bien organizada y productiva con muchas ganas de aprender y aportar mis conocimientos a un equipo de trabajo.
                </p>
                <p>
                    Me considero responsable, con gran flexibilidad a la hora de realizar mi trabajo y me encuentro en constante aprendizaje.
                </p>
            </div>
            <Habilidades/>
        </div>
    )
}

export default SobreMi
