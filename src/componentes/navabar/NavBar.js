import React from 'react'
//css
import "../navabar/navbar.css"
const NavBar = () => {
    return (
        <header className="header">
            <div className="titulo">
                <p className='medio'>diego olivera</p>
            </div>

            <nav>
                <ul className="listaHeader">
                    <li>Inicio</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
