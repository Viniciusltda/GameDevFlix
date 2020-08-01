import React from 'react';
import PropTypes from 'prop-types';

import { InputStyle, LabelStyle, TextAreaStyle } from './styles';

function FormField({
	label, value, type, name, onChange, 
}) {
	if (label === 'Descrição da Categoria' || label === 'Descrição do Pokémon') {
		const fieldId = `id_${name}`;

		return (
			<>
				<LabelStyle htmlFor={fieldId}>
					{label}
					:

					<TextAreaStyle type={type} value={value} name={name} onChange={onChange} />

				</LabelStyle>
			</>
		);
	}

	return (
		<>
			<LabelStyle>
				{label}
				:

				<InputStyle type={type} value={value} name={name} onChange={onChange} />

			</LabelStyle>
            
		</>
	);
}

FormField.defaultProps = {
	value: '',
	type: 'text',
	onChange: () => {},
	
};

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func,

};

export default FormField;
