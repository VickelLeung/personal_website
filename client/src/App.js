import React from 'react';
import Headroom from "react-headroom";
import scrollToComponent from 'react-scroll-to-component';

// import {NavigationBar} from "./component/navigationBar/NavigationBar";
import { Homepage } from './sections/HomePage';
import { AboutPage } from './sections/AboutPage';
import styled from "styled-components";
import { Portfolio } from './sections/Portfolio';
import { Contact } from './sections/Contact';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class App extends React.Component {

   state = {
    currentTab: 0
  }

  handleTabChange=(loc)=>{
    console.log("loc: " + loc);
    this.setState({
      currentTab : loc
    })

    console.log("state: " + this.state.currentTab);
  }

  combineFunction=(tab, loc)=>{
    this.setState({
      currentTab : tab
    })

    scrollToComponent(loc, { offset: 0, align: 'top', duration: 1500, ease:'inCirc'})
  }

render(){  
  const linkCss = {color:"orange"};
    return (
      <Wrapper>
        
        <Nav>
        <TabContainer
        value={this.state.currentTab}
        indicatorColor="primary"

        textColor="primary"
        aria-label="navigation"
        centered
      >
          <Tab style={linkCss} onClick={()=>this.combineFunction(0, this.home)} label="Home" />
          <Tab style={linkCss} onClick={()=>this.combineFunction(1, this.about)} label="About Me" />
          <Tab style={linkCss} onClick={()=>this.combineFunction(2, this.portfolio)} label="Portfolio" />
          <Tab style={linkCss} onClick={()=>this.combineFunction(3, this.contact)} label="Contact Me" />
       </TabContainer>        
        </Nav>
    
          <section ref={(section) => { this.home = section; }}>
            <Homepage />
          </section>
          <section ref={(section) => { this.about = section; }}>
            <AboutPage />
          </section>
          <section ref={(section) => { this.portfolio = section; }} >
          <Portfolio /> 
          </section>
          <section ref={(section) => { this.contact = section; }}>
            <Contact />
          </section>
       
      </Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`

`;

const Nav = styled(Headroom)`
  position:absolute;
  width:100%;
`;

const TabContainer = styled(Tabs)`
background-color: rgba(0,0,0, 0.6);
height: 4em;
.PrivateTabIndicator-colorPrimary-26 {
  background-color:orange;
}

`