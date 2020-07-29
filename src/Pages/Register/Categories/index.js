import React from 'react';
import DefaultPage from '../../../Components/Layout';
import {Link} from 'react-router-dom';

function CadastroCategorias(){
	return(
		<DefaultPage>
			<h1>Cadastro de Categorias.</h1>

			<Link to="/">
				Voltar à Home.
			</Link>

		</DefaultPage>
	);
}

export default CadastroCategorias;