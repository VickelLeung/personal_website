import React from "react";
import styled from "styled-components";

function CardTitle (props) {
    const color = props.styling;

    return(
        <Wrapper style={ {color} }>
            <Title>{props.children}</Title>
        </Wrapper>
    )
}

export {CardTitle}

const Wrapper = styled.div`
    display:flex;
    align-items: center; /* Vertical center alignment */
    justify-content: center; /* Horizontal center alignment */
    height:auto;
    min-height: 15em;
    width:auto;
    min-width: 15em;
    background: linear-gradient(0deg, rgba(65,66,66,0) 0%, rgba(0,0,0,1) 70%);
`;

const Title = styled.h2`
color:white;
`;