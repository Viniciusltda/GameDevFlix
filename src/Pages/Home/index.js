import React from 'react';
import Styled from 'styled-components';

import Menu from '../../Components/Menus/index.js';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';
import Footer from '../../Components/Footer';


const AppWrapper = Styled.div`
  background: var(--grayDark);
  
  padding-top: 94px;

  @media(max-width: 800px){
    padding-top: 40px;
    
  }
	
`

function Home() {
  return (
    <AppWrapper>
      <Menu/>

      <BannerMain videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Descubra qual Engine se encaixa melhor nos seus planos."}

       />

       <Carousel 
        ignoreFirstVideo 
        category={dadosIniciais.categorias[0]}

        />

        <Carousel category={dadosIniciais.categorias[1]}/>

        <Carousel category={dadosIniciais.categorias[2]}/>

        <Carousel category={dadosIniciais.categorias[3]}/>

        <Carousel category={dadosIniciais.categorias[4]}/>

        <Carousel category={dadosIniciais.categorias[5]}/>

        <Footer/>
            
    </AppWrapper>
  );
}

export default Home;

