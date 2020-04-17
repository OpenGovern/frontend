import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import RecentActivity from '../../components/RecentActivity/RecentActivity'

const USGovStyled = styled.div`

    display: flex;
    flex-direction: column;
    flex: none;
    align-items: center;

    text-align: center;
`

function USGov() {

    return (
        <USGovStyled>
            <h1>The Government of the United State of America</h1>
            <p>This a page helping to detail the current/historical structure and actions of the government of the United States of America</p>
            <RecentActivity />
        </USGovStyled>
    )
}

export default USGov