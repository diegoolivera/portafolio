import React from 'react'

//iconos
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonSquare } from "react-icons/bs";
import { AiOutlinePushpin } from "react-icons/ai";


//css
import "../contacto/contacto.css"

const Contacto = () => {
    return (
        <div id='contacto'>
            <p className='titulo'>Contacto</p>

            <div className='flex'>
                <div className='contenedorLogo'>
                    <div className='contenedorContacto'>
                        <FaGithub className='logoContacto' />
                        <div className="footerContacto">
                            <AiOutlinePushpin className='logoSelector'/>
                            <a href='/'>Ver Github</a>  
                        </div>  
                    </div>

                    <div className='contenedorContacto'>
                        <FaLinkedin className='logoContacto' />
                        <div className="footerContacto">
                            <AiOutlinePushpin className='logoSelector'/>
                            <a href='/'>Ver Linkedin</a>  
                        </div>  
                    </div>
                
                    <div className='contenedorContacto'>
                        <AiOutlineMail className='logoContacto' />
                        <div className="footerContacto">
                            <AiOutlinePushpin className='logoSelector'/>
                            <a href='/'> Ver Email</a>  
                        </div>  
                    </div>

                    <div className='contenedorContacto'>
                        <BsPersonSquare className='logoContacto' />
                        <div className="footerContacto">
                            <AiOutlinePushpin className='logoSelector'/>
                            <a href='/'>Ver CV</a>  
                        </div>  
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Contacto
