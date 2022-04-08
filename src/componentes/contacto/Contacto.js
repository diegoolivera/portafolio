import React from 'react'

//iconos
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";



//css
import "../contacto/contacto.css"

const Contacto = () => {
    return (
        <div id='contacto'>
            <p className='titulo'>Contacto</p>

            <div className='flex'>
                <a href='/'><FaGithub className='logoContacto' /></a>
                <a href='/'><FaLinkedin className='logoContacto' /></a>
                <a href='/'><BsPersonSquare className='logoContacto' /></a>   
            </div>
        </div>
    )
}

export default Contacto
