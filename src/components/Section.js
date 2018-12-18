import React from 'react'
import styled from 'styled-components'
import HlineCard from './HlineCard';
import VlineCard from './VlineCard';

const SectionGroup = styled.div`
    padding:100px 0;
    padding-bottom:220px;
    display:grid;
    justify-content:center;
    background: url(${require('../images/triangle.svg')});
    background-size:340px;
    background-position:center;
    background-position-y:250px;
    background-repeat:no-repeat;
    justify-items:center;
    background-color:#03062C;
    grid-row-gap:20px;
    @media (max-width: 640px) {
        background:none;
        background-color:#03062C;
    }
`

const SectionTitle = styled.h3`
    text-transform:uppercase;
    font-size:50px;
    font-weight:100;
`

const SectionRow1 = styled.div`
    display:grid;
    grid-template-columns:380px 270px 380px;
    @media (max-width: 640px) {
        grid-template-columns:380px;
        grid-row-gap:50px;
    }
`
const SectionSpace=styled.div``
const HideCard=styled.div`
    display:none;
    @media (max-width: 640px) {
        display:block;
    }

`

const Section = () => (
    <SectionGroup>
        <SectionTitle>Architecture</SectionTitle>
        <SectionRow1>
            <HlineCard title="Price-Stable Cryptocurrencies" text="SmartCoins provide the freedom of cryptocurrency with the stability of the dollar" image={require('../images/Price_Stable.svg')}/>
            <SectionSpace></SectionSpace>
            <HlineCard title="Decentralized Asset Exchange" text="A fast and fluid trading platform" image={require('../images/Decentralized_Asset.svg')}/>
            <HideCard><HlineCard title="Delegated Proof-of-Stake Consensus" text="A robust and flexible consensus protocol" image={require('../images/Delegated.svg')}/></HideCard>
        </SectionRow1>
        <VlineCard title="Delegated Proof-of-Stake Consensus" text="A robust and flexible consensus protocol" image={require('../images/Delegated.svg')}/>
    </SectionGroup>
)

export default Section
