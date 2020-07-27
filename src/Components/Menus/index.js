import React from 'react';
import Logo from '../../Assets/Images/logo.png';
import './menu.css';
import ButtonLink from '../Extra-Components/Buttons';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="GameDevFlix logo" />

            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo

            </ButtonLink>

        </nav>
    );
}

export default Menu;