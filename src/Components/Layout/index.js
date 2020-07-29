import React from 'react';
import Menu from '../Menus';
import Footer from '../Footer';
import Styled from 'styled-components';

const Main = Styled.main`
    background-color: var(--black);
    color: var(--white);

    flex: 1;

    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`

function DefaultPage({children}){
    return (
        <>
            <Menu/>

                <Main>
                    {children}

                </Main>

            <Footer/>

        </>
    );
}

export default DefaultPage;