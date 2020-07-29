import React from 'react';
import DefaultPage from '../../../Components/Layout';
import {Link} from 'react-router-dom';

function CadastroVideo(){
	return(
		<DefaultPage>
			<h1>Cadastro de Video.</h1>

			<Link to="/cadastro/categoria">
				Cadastrar Categorias
			</Link>

		</DefaultPage>
	);
}

export default CadastroVideo;