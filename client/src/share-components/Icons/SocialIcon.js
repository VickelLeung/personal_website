import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const SocialIcon = (props) =>{
    return(<Wrapper>
        {/* <Icon href="http://www.google.com" target="_blank" ><i class="fas fa-file-code fa-2x" /></Icon> */}

        <Link href={props.link}><Icon  className={props.icon} /></Link>

    </Wrapper>)
}

export {SocialIcon}

const Wrapper = styled.div`
padding: 0 1%;
`;

const Icon = styled.i`
transition: transform 1s;
&:hover {
    transform: translate(0px, -15px);
  }
`;

const Link = styled.a`
text-decoration: none;
color: black;
`;