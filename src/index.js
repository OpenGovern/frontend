import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import NavBar from './components/NavBar/NavBar';

import Home from './pages/Home';
import About from './pages/About';
import USGov from './pages/USGov';

const AppStyled = styled.div`
    display: flex;
    margin: 0;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
`


function App(props) {

    return (
        <Router>
            <AppStyled>
                <NavBar />

                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/usgov">
                        <USGov/>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </AppStyled>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("app"));

