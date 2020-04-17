import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const BillPreviewStyled = styled.li`
    display: flex;
    flex-direction: row;

    border-style: groove;
`


function BillPreview(props){
    const quickinfo = props.billStatus.bill.billType +'-'+ props.billStatus.bill.billNumber

    return (
        <BillPreviewStyled>
            <p>{quickinfo}</p>
        </BillPreviewStyled>
    )
}

export default BillPreview