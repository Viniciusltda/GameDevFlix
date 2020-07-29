import styled from 'styled-components';


export const FooterBase = styled.footer`
	background-color: var(--black);
	color: var(--white);

	border-top: 2px solid red;
	
	padding: 32px 16px;

	text-align: center;


	@media(max-width: 800px){
		margin-bottom: 50px;

	}

`;
