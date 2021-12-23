import React from 'react'

//css
import "../proyectos/trabajos.css"

const trabajos = () => {
    return (
        <div>
             <article className='card'>
                    <header className='headerCard'>
                        <p>Carrito de Compras</p>
                    </header>
                    <div>
                        <hr></hr>
                        <p className='tituloTecnologias'>Tecnologias</p>
                        <div className='contenedorTecnologias'>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JS</p>
                            <p>JQUERY</p>
                            <p>Sweet Alert</p>
                            <p>LocalStorage</p>
                        </div>
                    </div>
                </article>
        </div>
    )
}

export default trabajos
