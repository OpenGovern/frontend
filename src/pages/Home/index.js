import React from 'react';
import styled from 'styled-components';
import DefaultPage from '../Default Page';

const HomeStyled = styled.div`

`

function Home() {

    return (
        <DefaultPage>
            <HomeStyled>
                <h1>Home</h1>
                <p>This is the home page for OpenGov. Here you can find live updates for the current bills going through congress, press briefings, and actions by the government that people should know about.</p>
            </HomeStyled>
        </DefaultPage>
    )
}

export default Home