import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../Assets/Images/logo.png';
import { MenuWrapper, LogoImage } from './style';
import ButtonLink from '../Button';

function Menu() {
	return (
		<MenuWrapper className="Menu">
			<Link to="/">
				<LogoImage className="Logo" src={Logo} alt="GameDevFlix logo" />

			</Link>

			<ButtonLink as={Link} className="ButtonLink" to="/cadastro/video">
				Novo Vídeo

			</ButtonLink>

		</MenuWrapper>
	);
}

export default Menu;
