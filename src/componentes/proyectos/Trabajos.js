import React from 'react'

//css
import "../proyectos/trabajos.css"



const trabajos = () => {
    return (
        <div className='grid ' data-aos="flip-left" data-aos-duration="2000">
             
             <article className='card '>
                    <header className='headerCard'>
                        <p>Catalogo De Hotel</p>
                    </header>
                    <hr></hr>
                    <div className='descripcionCard'>
                        una descripcion que describa que es y que funcionalidad cumple
                        el proyecto
                    </div>
                    <div className='main'>
                        <p className='tituloTecnologias'>Tecnologias</p>
                        <div className='contenedorTecnologias'>
                            <p>HTML</p>
                            <p>SCSS</p>
                        </div>
                    </div>
                    <div className='contenedorBotones'>
                        <a target="_blank" href="https://github.com/diegoolivera/Servicio_Hotel">Codigo</a>
                        <a target="_blank"  href="https://serviciohotel.000webhostapp.com/">Abrir</a>
                    </div>
                </article>
        </div>
    )
}

export default trabajos
