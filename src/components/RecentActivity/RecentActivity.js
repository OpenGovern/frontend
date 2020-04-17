import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import BillPreview from './BillPreview'


const RecentActivityStyled = styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;

    text-align: left;

`


function RecentActivity(props) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch (
            `http://localhost:5000/api/recent_activity/days/5`,
            {
                method: "GET"
            }
        )
        .then(res => res.json())
        .then(response => {
            setData(response.hits)
            setIsLoading(false)
        })

    }, [])


    return (
        <RecentActivityStyled>
            <h1>~ Recent Activity ~</h1>
            
            {isLoading && <p>Loading...</p>}

            <ul>
                {data.map((bill,index) => (
                    <BillPreview billStatus={bill._source.billStatus} key={index}/>
                ))}
            </ul>

        </RecentActivityStyled>
    )
}

export default RecentActivity