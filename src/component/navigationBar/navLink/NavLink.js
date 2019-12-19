import React from "react";
import styled from "styled-components";
import scrollToComponent from 'react-scroll-to-component';

function NavLink(props) {
  const loc = props.at;
  
    return (
      <Link onClick={ () => scrollToComponent( loc, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'}) }>
       {props.children} 
      </Link>
    )
  }

export {NavLink};


const Link = styled.button`
text-decoration:none;
margin: 0 5%;
padding: 5% 2%;
`