import React from "react";
import styled from "styled-components";

function SkillCard  (props){
    return(
        <Wrapper>
        <Title>{props.title}</Title>
        <ContentContainer>
         {props.children}
        </ContentContainer>
        </Wrapper>
    )

}

export {SkillCard};
// padding: 2% 10%;
const Wrapper = styled.div`
text-align:center;

`;

const Title = styled.h2``;

const ContentContainer = styled.div`
display: flex;
flex-wrap: wrap;
`;