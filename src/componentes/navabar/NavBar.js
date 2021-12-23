import React from 'react'
//css
import "../navabar/navbar.css"
const NavBar = () => {
    return (
        <header className="header">
            <div>
                <p className='medio'>diegoolivera</p>
            </div>

            <nav>
                <ul className="listaHeader">
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
