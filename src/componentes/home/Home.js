import React from 'react'
import logo from "../../logo.svg"

const Home = () => {
    return (
        <>
            <a name='home'></a>
        
            <main className="contenedor">
                <div className="descripcion">
                    <h1>Soy Diego Olivera</h1>
                    <p>Desarrollador web Front-End</p>
                </div>

                <div className="foto">
                    <img src={logo}alt="fotoDiego" />
                </div>
            </main>
        </>
    )
}

export default Home
