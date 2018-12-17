import React from 'react'
import styled from 'styled-components'

const SectionContent = styled.div`  
    height:300px;
    width:340px;
    display:grid;
    grid-template-rows:1px 30px 40px auto;
    align-items:center;
    grid-row-gap:10px;
`
const SectionImg=styled.img`
`

const SectionTitle = styled.h3`
    font-size:24px;
    font-weight:400;
    padding-left:10px;

`

const SectionText = styled.p`
    font-size:14px;
    font-weight:100;
    padding-left:10px;

`

const SectionKeyImg=styled.img`
    width:280px;
    padding-left:30px;
    align-self: flex-start;

`


const HlineCard = props => (
    <SectionContent>
        <SectionImg src={require('../images/Line_horizontal.svg')}/>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionText>{props.text}</SectionText>
        <SectionKeyImg src={props.image}/>
    </SectionContent>

)
export default HlineCard