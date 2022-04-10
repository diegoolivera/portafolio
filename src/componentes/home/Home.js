import React from 'react'
import logo from "../../imagen/yo.jpg"
import "../home/home.css"

const Home = () => {
    return (
        <div className='contenedorComponente'>
        
            <main className="contenedor">
                <div className="descripcion">
                    <p>Hola!</p>
                    <h1> Soy Diego Olivera</h1>
                    <p>FullStack Developer</p>
                </div>

                <div className="contenedorLogo">
                    <img className='logo' src={logo}alt="fotoDiego" />
                </div>
            </main>
        </div>
    )
}

export default Home
