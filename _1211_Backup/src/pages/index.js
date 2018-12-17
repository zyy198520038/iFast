import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';

const IndexPage = () => (
  <div>
  <div className="Hero">
    <div className="HeroGroup">
      <h1>iFAST</h1>
      <p>Decentralized Exchange of the World</p>
      <div className="IconGroup">
        <Link to="/"><img class="IconItem" src={require('../images/email.svg')}/></Link>
        <Link to="/"><img class="IconItem" src={require('../images/telegram.svg')}/></Link>
        <Link to="/"><img class="IconItem" src={require('../images/facebook.svg')}/></Link>
        <Link to="/"><img class="IconItem" src={require('../images/twitter.svg')}/></Link>
      </div>
      <button>EXPLORE (Beta)</button> 
      <div>
        <svg width="100px" height="100px" viewbox="0 0 100 100">
          <path fill="#ffffff">
            <animate attributeName="d" dur="1440ms" repeatCount="indefinite"
             keyTimes="0;
                       .0625;
                       .208333333;
                       .3125;
                       .395833333;
                       .645833333;
                       .833333333;
                       1"
             calcMode="spline" 
             keySplines="0,0,1,1;
                         .42,0,.58,1;
                         .42,0,1,1;
                         0,0,.58,1;
                         .42,0,.58,1;
                         .42,0,.58,1;
                         .42,0,.58,1"
             values="M 0,0 
                     C 50,0 50,0 100,0
                     100,50 100,50 100,100
                     50,100 50,100 0,100
                     0,50 0,50 0,0
                     Z;

                     M 0,0 
                     C 50,0 50,0 100,0
                     100,50 100,50 100,100
                     50,100 50,100 0,100
                     0,50 0,50 0,0
                     Z;

                     M 50,0 
                     C 75,25 75,25 100,50 
                     75,75 75,75 50,100
                     25,75 25,75 0,50
                     25,25 25,25 50,0
                     Z;

                     M 25,50 
                     C 37.5,25 37.5,25 50,0 
                     75,50 75,50 100,100
                     50,100 50,100 0,100
                     12.5,75 12.5,75 25,50
                     Z;

                     M 25,50 
                     C 37.5,25 37.5,25 50,0 
                     75,50 75,50 100,100
                     50,100 50,100 0,100
                     12.5,75 12.5,75 25,50
                     Z;

                     M 50,0
                     C 77.6,0 100,22.4 100,50 
                     100,77.6 77.6,100 50,100
                     22.4,100, 0,77.6, 0,50
                     0,22.4, 22.4,0, 50,0
                     Z;
                     
                     M 50,0
                     C 77.6,0 100,22.4 100,50 
                     100,77.6 77.6,100 50,100
                     22.4,100, 0,77.6, 0,50
                     0,22.4, 22.4,0, 50,0
                     Z;
                     
                     M 100,0 
                     C 100,50 100,50 100,100
                     50,100 50,100 0,100
                     0,50 0,50 0,0
                     50,0 50,0 100,0
                     Z;"/>
            </path>
          </svg>
        </div>
    </div>
  </div>
  <div className="IfastIntro">
    <h2>WHAT CAN iFAST DO</h2>
    <p>iFast is a Decentralized Exchange based on Graphene and also a gateway to the global blockchain market, through an almighty account, you can easily trade Blockchain Assets.</p>
    <img src={require('../images/ifast_intro.svg')}/>
  </div>
  <Section title="ARCHITECTURE"/>
  <div className="Advantage">
    <h2>Advantages</h2>
    <Card 
    title="Big Data"
    text="iFast combines the iFast blockchain with big data technology, big data provides ability to help you interpret data. Interpreting the data becomes the advantage, it can help you easily know the insight of blockchain world"
    image={require('../images/big_data.svg')}
    />
    <Card 
    title="Gateway for Assets"
    text="iFast platform provides a gateway which can easy help you swap assets cross chains easily and atomic;iFast has already implemented assets exchange on ethereum, we will support BTC and EOS in future"
    image={require('../images/exchange.svg')}
    />
    <Card 
    title="Metropolitan platform for assets exchange"
    text="iFast platform, you can change multiple main stream coins as decentralized"
    image={require('../images/gateway.svg')}
    />
    <Card 
    title="Shared Communit"
    text="iFast is a shared community, it provides a p2p social network and also you can contribute your energy and innovation to make iFast more flexible and powerful"
    image={require('../images/community.svg')}
    />
  </div>
</div>
)

export default IndexPage





