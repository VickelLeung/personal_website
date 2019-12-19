import React from "react";
import styled from "styled-components";

function SkillCard  (props){
    return(
        <Wrapper>
        <Title>{props.title}</Title>
        <p>{props.children}</p>
        </Wrapper>
    )

}

export {SkillCard};

const Wrapper = styled.div`
width:auto;
width:30em;
text-align:center;
`;

const Title = styled.h2``;