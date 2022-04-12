import React from 'react'
//css
import "./navMobile.css"
//iconos
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const NavBarMobile = () => {

  const openMenu = ()=>{
    let menu = document.getElementsByClassName("menuMobile")
    for (let i=0; i<menu.length; i++){
      menu[i].style.display = 'block';
    }
  }

  const closeMenu = ()=>{
      let menu = document.getElementsByClassName("menuMobile")
      for (let i=0; i<menu.length; i++){
        menu[i].style.display = 'none';
      }
  }

  return (
    <nav className='navMenu'>
        <GiHamburgerMenu className='burgerLogo' onClick={openMenu}/>
        <ul className="menuMobile">
            <ImCross className='btnCloseBurger' onClick={closeMenu}/>
            <li><a onClick={closeMenu} href="/">Inicio</a></li>
            <li><a onClick={closeMenu} href="#aboutMe">Sobre Mi</a></li>
            <li><a onClick={closeMenu} href="#Portafolio">Portafolio</a></li> 
            <li><a onClick={closeMenu} href="#contacto">Contacto</a></li>      
        </ul>
    </nav>
    
  )
}

export default NavBarMobile