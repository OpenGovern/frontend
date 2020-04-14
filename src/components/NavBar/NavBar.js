import React from 'react'
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const NavBarStyled = styled.div`
    height: 50px;
    width: 100%;
    background-color: lightgrey;
    
    padding: 20px 50px;


    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    overflow: visible;

    font-color: black;
` 

const Title = styled.div`
    font-size: 35px;
    color: black;
    
    margin-right: 30px;
`

const NavBarItem = styled.div`
    font-size: 20px;
    font-weight: 100;
    color: black;

    margin: 0px 20px;
    
`

function NavBar(props) {

    return (
        <NavBarStyled>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Title>OpenGov</Title>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
                <NavBarItem>About</NavBarItem>
            </Link>
            <Link to="/usgov" style={{ textDecoration: 'none' }}>
                <NavBarItem>US Government</NavBarItem>
            </Link>
        </NavBarStyled>
    )
}

export default NavBar