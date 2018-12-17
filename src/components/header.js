import React from 'react'
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
        <a href="#home"><img src={require('../images/logo.svg')} width="30"/></a>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#architecture">Architecture</a>
        <a href="#advantage">Advantage</a>
        <a href="#roadmap">Roadmap</a>
        <a>中文</a>
      </div>
    </div>
   )

  }

}

export default Header
