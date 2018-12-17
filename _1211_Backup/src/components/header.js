import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state={
      hasScrolled:false
    }
  }
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll)
  }

  handleScroll=(event)=>{
    const scrollTop=window.pageYOffset
    if(scrollTop>300){
      this.setState({hasScrolled:true})
    }else{
      this.setState({hasScrolled:false})
    }
  }
  render(){
   return(
    <div className={this.state.hasScrolled?'Header HeaderScrolled':'Header'}>
      <div className="HeaderGroup">
        <Link to="/"><img src={require('../images/logo.svg')} width="30"/></Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/architecture">Architecture</Link>
        <Link to="/advantage">Advantage</Link>
        <Link to="/roadmap">Roadmap</Link>
      </div>
    </div>
   )

  }

}

export default Header
