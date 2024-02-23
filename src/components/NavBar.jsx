import './NavBar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav_logo"> HearClear </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#"> INICIO</a>
                <a href="#">Escuchar</a>
                <a href="#"> Perfil</a>
                <a href="#"> Calendario</a>
                <a href="#"> Salir</a>
            </div>
            
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default NavBar
