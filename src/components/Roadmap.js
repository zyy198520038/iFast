import React from 'react'
import styled from 'styled-components'


const SectionGroup = styled.div`
    height:800px;
    background-color:#03062C;
    background-image:url(${require('../images/bg.png')});
    background-position: bottom;
    background-repeat: no-repeat;
    display:grid;
    grid-template-rows: 40% 60% ;
    justify-content: center;
    @media (max-width: 640px) {
        height:1300px;
        grid-template-rows: 20% 80%;
    }
`
const SectionTitle = styled.h2`
    text-transform: uppercase;
    font-size:50px;
    margin-top: 120px;
    font-weight: 100;
    justify-self: center;
`

const SectionImg1 =styled.img`
    display:block;
    @media (max-width: 640px) {
        display:none;
    }
`

const SectionImg2 =styled.img`
    display:none;
    @media (max-width: 640px) {
        display:block;
    }

`

const Roadmap = props => (
    <SectionGroup>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionImg1 src={require('../images/history.svg')}/>
        <SectionImg2 src={require('../images/history_v.svg')}/>
    </SectionGroup>
)

export default Roadmap
