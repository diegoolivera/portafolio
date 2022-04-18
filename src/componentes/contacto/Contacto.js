import React from 'react'

//iconos
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { BsPersonSquare,BsArrowRightCircle } from "react-icons/bs";

//cv
import cv from "../../cv/CV_DiegoOlivera.pdf"

//css
import "../contacto/contacto.css"

const Contacto = () => {
    return (
        <div id='contacto'>
            <p className='titulo'>Contacto</p>

            <div className='flex' data-aos="flip-left" data-aos-duration="1500"> 
                <div className='contenedorContacto'  >
                    <FaGithub className='logoContacto ' />
                    <a target="_blank" href='https://github.com/diegoolivera' className='textContacto'> <BsArrowRightCircle/> ver Github</a>
                </div>
                <div className='contenedorContacto'>
                    <FaLinkedin className='logoContacto linkedin' />
                    <a target="_blank" href='https://www.linkedin.com/in/diego-olivera97/' className='textContacto'> <BsArrowRightCircle/> ver Linkedin</a>
                </div>
    
                <div className='contenedorContacto'>
                    <BsPersonSquare className='logoContacto cv' />  
                    <a  target="_blank" className='textContacto' href={cv} download="CV_DiegoOlivera.pdf"> <BsArrowRightCircle/> Descargar CV</a>
                </div>   
            </div>
        </div>
    )
}

export default Contacto
