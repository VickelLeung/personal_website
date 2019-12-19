import React from 'react';
import Headroom from "react-headroom";
import scrollToComponent from 'react-scroll-to-component';

// import {NavigationBar} from "./component/navigationBar/NavigationBar";
import { Homepage } from './sections/HomePage';
import { AboutPage } from './sections/AboutPage';
import styled from "styled-components";
import { Portfolio } from './sections/Portfolio';
import { Contact } from './sections/Contact';



class App extends React.Component {

render(){  
    return (
      <Wrapper>
        
        <Headroom>
          <div>
          <button onClick={() => scrollToComponent(this.home, { offset: 0, align: 'top', duration: 1500, ease:'inCirc'})}>Home</button>
          <button onClick={() => scrollToComponent(this.about, { offset: 0, align: 'top', duration: 1500, ease:'inCirc'})}>About Me</button>
          <button onClick={() => scrollToComponent(this.portfolio, { offset: 0, align: 'top', duration: 1500, ease:'inCirc'})}>Portfolio</button>
          <button onClick={() => scrollToComponent(this.contact, { offset: 0, align: 'top', duration: 1500, ease:'inCirc'})}>Contact Me</button>
          </div>
        </Headroom>
        
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
width:auto;
min-width:50em;
`;