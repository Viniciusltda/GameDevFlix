import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import DefaultPage from '../../../Components/Layout';
import FormField from '../../../Components/Form';
import {FormWrapper, TitleWrapper, FormFieldWrapper, ButtonStyle, LinkStyle, LinkWrapper} from './styles.js';

function CadastroCategorias(){
	const initialValues = {
		name: '',
		description: '',
		color: '',
	};

	const [values, setValues] = useState(initialValues);
	const [category, setCategory] = useState([]);

	function SetValue(key, value){
		setValues({
			...values,
			[key]: value
		});
	}

	function OnChangeHandler(e) {
		SetValue(e.target.getAttribute('name'), e.target.value);

	}

	return(
		<DefaultPage>
			<TitleWrapper>
				<h1>Cadastro da Categoria: {values.name}</h1>

			</TitleWrapper>

			<FormWrapper>

				<form onSubmit={function HandleForm(e){
					e.preventDefault();

					setCategory([
						...category,
						values
					]);

					SetValue(initialValues);

				}}>

					<FormFieldWrapper>
						<FormField label="Nome da Categoria" type="text" name="name" onChange={OnChangeHandler} />

					</FormFieldWrapper>

					<FormFieldWrapper>
						{/* <div>
							<label>
								Descrição:
								
								<textarea type="text" name="description" onChange={OnChangeHandler} />

							</label>

						</div> */}

						<FormField label="Descrição da Categoria" type="text" name="description" onChange={OnChangeHandler}/>

					</FormFieldWrapper>



					<FormFieldWrapper>
						<FormField label="Cor da Categoria" type="color" name="color" onChange={OnChangeHandler} />

					</FormFieldWrapper>



					<ButtonStyle>
						Cadastrar

					</ButtonStyle>

				</form>

				<ul>
					{category.map((categories, index) => {
						return(
							<li key={`${categories} ${index}`}>
								{categories.name}
							</li>
						);
					})}
				</ul>

			</FormWrapper>

			<LinkWrapper>
				<LinkStyle as={Link} to="/">
					Voltar à Home
				</LinkStyle>

				<LinkStyle as={Link} to="/cadastro/pokemon">
					Cadastrar Pokémon's
				</LinkStyle>

			</LinkWrapper>


		</DefaultPage>
	);
}

export default CadastroCategorias;