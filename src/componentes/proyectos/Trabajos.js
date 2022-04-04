import React from 'react'

//css
import "../proyectos/trabajos.css"
//icons

import { BsCart4 } from "react-icons/bs";
import {FaHotel} from "react-icons/fa"


const trabajos = () => {
    return (
        <div className='grid'>
             <article className='card'>
                    <header className='headerCard'>
                        <p>Carrito de Compras</p>
                    </header>
                    <hr></hr>
                    <BsCart4 className='logoCard'/>
                    <div className='main'>
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
                    <div className='contenedorBotones'>
                        <a target="_blank"  href="https://hard-components.vercel.app/">Abrir</a>
                        <a target="_blank" href="https://github.com/diegoolivera/Hard_Components">Codigo</a>
                    </div>
                </article>

             <article className='card'>
                    <header className='headerCard'>
                        <p>Catalogo De Hotel</p>
                    </header>
                    <hr></hr>
                    <FaHotel className='logoCard'/>
                  
                    <div className='main'>
                        <p className='tituloTecnologias'>Tecnologias</p>
                        <div className='contenedorTecnologias'>
                            <p>HTML</p>
                            <p>SCSS</p>
                        </div>
                    </div>
                    <div className='contenedorBotones'>
                        <a target="_blank"  href="https://serviciohotel.000webhostapp.com/">Abrir</a>
                        <a target="_blank" href="https://github.com/diegoolivera/Servicio_Hotel">Codigo</a>
                    </div>
                </article>

             <article className='card'>
                    <header className='headerCard'>
                        <p>Carrito de Compras</p>
                    </header>
                    <hr></hr>
                    <BsCart4 className='logoCard'/>
                  
                    <div className='main'>
                        <p className='tituloTecnologias'>Tecnologias</p>
                        <div className='contenedorTecnologias'>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>React</p>
                            <p>firebase</p>
                        </div>
                    </div>
                    <div className='contenedorBotones'>
                        <a target="_blank" href="https://github.com/diegoolivera/Mini-Mercado">Codigo</a>
                    </div>
                </article>
        </div>
    )
}

export default trabajos
