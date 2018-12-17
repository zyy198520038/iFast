import React from 'react'
import styled from 'styled-components'

const SectionContent = styled.div` 
    height:150px;
    background-color:#03062C;
    margin:0px auto;
    display:grid;
    grid-template-columns:10% 40% 20% 20% 10%;
    justify-content:center;
    align-items:center;
    @media (max-width: 640px) {
        grid-template-columns:10% auto 10%;
        grid-template-rows:auto auto 20%;
    }
    

`

const SectionText = styled.p`
    font-size:14px;
    font-weight:100;
    justify-self:flex-start;
    grid-column:2;
    
    @media (max-width: 640px) {
        grid-column:2;
        grid-row:2;
        justify-self:center;
        align-self:center;
    }

`

const SectionImg=styled.img`
    grid-column:4;
    width:80px;
    justify-self:flex-end;
    @media (max-width: 640px) {
        grid-column:2;
        padding-top:30px;
        
        justify-self:center;
        align-self:center;
    }

`

const Footer = props => (
    <SectionContent>
        <SectionText>Copyright © 2018 iFast Foundation</SectionText>
        <SectionImg src={require('../images/iFAST.svg')}/>
    </SectionContent>

)
export default Footer