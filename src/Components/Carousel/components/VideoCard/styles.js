import styled from 'styled-components';

export const VideoCardContainer = styled.a`
	height: 197px;
	width: 298px;

	border: 2px solid;
	border-radius: 6px;

	display: inline-block;

	background-image: ${({url}) => `url(${url})`};
	background-size: cover;
	background-position: center;

	transition: opacity .3s;

	&:hover, &:focus{
		opacity: .5;
		
	}
`;
