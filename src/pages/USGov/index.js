import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const USGovStyled = styled.div`

    display: flex;
    flex-direction: column;
    flex: none;
    align-items: center;

    text-align: center;
`

function USGov() {
    const [empty, setEmpty] = useState()
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch (
            `http://localhost:5000/api/congress/directory/`,
            {
                method: "GET"
            }
        )
        .then(res => res.json())
        .then(response => {
            setData(response.filter(con => 
                con.terms[con.terms.length-1].type == "sen"
                ))
            setIsLoading(false)
        })

    }, [])

    return (
        <USGovStyled>
            <h1>The Government of the United State of America</h1>
            <p>This a page helping to detail the current/historical structure and actions of the government of the United States of America</p>
            
            {isLoading && <p>Loading Data...</p>}
            
            <p>There are currently {data.length} serving members in Congress</p>
            <h2>Here are all their names and states:</h2>
            {data.map((d, index) => (
                <p key={index}> {d.name.first + ' ' + d.name.last + ' - ' + d.terms[d.terms.length-1].state}</p>
            ))}
            
        </USGovStyled>
    )
}

export default USGov