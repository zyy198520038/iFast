import React from 'react'
import styled from 'styled-components'

const SectionContent = styled.div`  
    margin-top:50px;
    height:300px;
    width:350px;
    display:grid;
    grid-template-columns:1px auto;
    grid-template-rows:60px 20px auto;
    align-content:center;
    align-items:center;
    padding-left:180px;
    grid-row-gap:10px;
    @media (max-width: 640px) {
        display:none;
    }

`
const SectionImg=styled.img`
    align-self: flex-start;
    grid-row:1 / 3;
    margin-top:-10px;
`

const SectionTitle = styled.h3`
    font-size:24px;
    font-weight:100;
    padding-left:20px;
`

const SectionText = styled.p`
    font-size:14px;
    font-weight:100;
    padding-left:20px;
`

const SectionKeyImg=styled.img`
    width:250px;
    padding-left:40px;

`

const VlineCard = props => (
    <SectionContent>
        <SectionImg src={require('../images/Line_vertical.svg')}/>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionText>{props.text}</SectionText>
        <SectionKeyImg src={props.image}/>
    </SectionContent>

)
export default VlineCard