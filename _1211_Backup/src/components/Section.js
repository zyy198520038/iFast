import React from 'react'
import styled from 'styled-components'
import HlineCard from './HlineCard';
import VlineCard from './VlineCard';

const SectionGroup = styled.div`
    padding:100px 0;
    padding-bottom:250px;
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
`

const SectionTitle = styled.h3`
    font-size:50px;
    font-weight:100;
`

const SectionRow1 = styled.div`
    display:grid;
    grid-template-columns:380px 270px 380px;

`
const SectionSpace = styled.div`

`

const Section = props => (
    <SectionGroup>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionRow1>
            <HlineCard title="Price-Stable Cryptocurrencies" text="SmartCoins provide the freedom of cryptocurrency with the stability of the dollar" image={require('../images/price_stable.svg')}/>
            <SectionSpace></SectionSpace>
            <HlineCard title="Decentralized Asset Exchange" text="A fast and fluid trading platform" image={require('../images/Decentralized_Asset.svg')}/>
        </SectionRow1>
        <VlineCard title="Delegated Proof-of-Stake Consensus" text="A robust and flexible consensus protocol" image={require('../images/Delegated.svg')}/>
    </SectionGroup>
)

export default Section
