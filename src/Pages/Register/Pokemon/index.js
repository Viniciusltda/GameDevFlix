import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import DefaultPage from '../../../Components/Layout';
import FormField from '../../../Components/Form';
import {FormWrapper, TitleWrapper, FormFieldWrapper, ButtonStyle, LinkStyle} from './styles.js';

function CadastroPokemon(){
	const initialValues = {
		name: 'Torterra',
		description: 'Pokémon Massa esse.',
		type: 'Grama',
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
				<h1>Cadastro do Pokémon: {values.name}</h1>

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
						<FormField label="Nome do Pokémon" value={values.name} type="text" name="name" onChange={OnChangeHandler} />

					</FormFieldWrapper>

					<FormFieldWrapper>
						<FormField label="Descrição do Pokémon" value={values.description} type="text" name="description" onChange={OnChangeHandler}/>

					</FormFieldWrapper>



					<FormFieldWrapper>
						<FormField label="Tipo do Pokémon" value={values.type} type="text" name="type" onChange={OnChangeHandler} />

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

			<LinkStyle as={Link} to="/">
				Voltar à Home.
			</LinkStyle>
			


		</DefaultPage>
	);
}

export default CadastroPokemon;