import React from 'react';

import {InputStyle, LabelStyle, TextAreaStyle} from './styles.js';

function FormField({label, value , type, name, onChange}){
    if(label === 'Descrição da Categoria' || label === 'Descrição do Pokémon'){
        return(
            <>
                <LabelStyle>
                    {label}:

                    <TextAreaStyle type={type} value={value} name={name} onChange={onChange}/>

                </LabelStyle>
            </>
        );
    }

    return(
        <>
            <LabelStyle>
                {label}:

                <InputStyle type={type} value={value} name={name} onChange={onChange}/>

            </LabelStyle>
            
        </>
    );
}

export default FormField;