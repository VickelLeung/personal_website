import React from "react";
import {SocialIcon} from "../../share-components/Icons/SocialIcon";
import styled from "styled-components";

const SocialContainer =()=>{
    return(
    <Wrapper>
        <SocialIcon link="" icon="fab fa-github fa-2x"/>
        <SocialIcon link="" icon="fab fa-linkedin-in fa-2x"/>
        <SocialIcon link="" icon="fab fa-facebook-f fa-2x"/>
        {/* <SocialIcon link="" icon="fab fa-github fa-2x"/> */}
    </Wrapper>
    )
}

export {SocialContainer};

const Wrapper = styled.div`
display:flex;
flex-direction: row;
justify-content: flex-end;
margin 0 5%;
`;