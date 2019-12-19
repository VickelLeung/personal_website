import React from "react";
import {NavLink} from "../navigationBar/navLink/NavLink";
import styled from "styled-components";
import scrollToComponent from 'react-scroll-to-component';

class NavigationBar extends React.Component{
render(){
  
    return(
        <Wrapper>
            <LogoContainer>
                <p>Logo</p>
            </LogoContainer>
            <LinkContainer>
                <button onClick={() => scrollToComponent(this.Blue, { offset: 0, align: 'top', duration: 1500, ease:'inCirc'})}>Go To Blue</button>
                <NavLink at={this.home} >Home</NavLink>
                <NavLink at={this.about} >About me</NavLink>
                <NavLink at={this.portfolio} >Portfolio</NavLink>
                <NavLink at={this.contact} >Contact me</NavLink>
            </LinkContainer>
        </Wrapper>
    )}
}

export {NavigationBar};

const Wrapper = styled.div`
position: sticky;
height:5em;
display:flex;
flex-direction: row;
background-color:rgb(0,0,0);
opacity:0.5;
`

const LogoContainer = styled.div`
width:50%;
`;

const LinkContainer = styled.div`
width:50%
text-align:right;
`