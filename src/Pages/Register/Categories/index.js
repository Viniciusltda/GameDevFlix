import React from 'react';
import DefaultPage from '../../../Components/Layout';
import {Link} from 'react-router-dom';

function CadastroCategorias(){
	return(
		<DefaultPage>
			<h1>Cadastro de Categorias.</h1>

			<form>
				<label>
					Nome da Categoria:
					
					<input type="text"/>

				</label>

				<button>
					Cadastrar

				</button>

			</form>

			<Link to="/">
				Voltar à Home.
			</Link>

		</DefaultPage>
	);
}

export default CadastroCategorias;