import React from 'react'
//css
import "../navabar/navbar.css"
const NavBar = () => {
    return (
        <header className="header">
            <div>
                <p className='medio'>Diego Olivera</p>
            </div>

            <nav>
                <ul className="listaHeader">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="#aboutMe">Sobre Mi</a></li>
                    <li><a href="#Portafolio">Portafolio</a></li> 
                    <li><a href="#contacto">Contacto</a></li>      
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
