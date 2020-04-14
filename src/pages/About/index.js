import React from 'react';
import styled from 'styled-components';
import DefaultPage from '../Default Page';

const AboutStyled = styled.div`

`

function About() {

    return (
        <DefaultPage>
            <AboutStyled>
                <h1>About</h1>
                <p>This a quick about sentence for testing purposes.</p>
            </AboutStyled>
        </DefaultPage>
    )
}

export default About