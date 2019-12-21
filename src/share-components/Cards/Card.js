import React from "react";
import styled from "styled-components";

function Card(props){
    
    return(
        <Container>
            <Text>
                {props.children}
            </Text>
            <Image src={props.image} alt="Image"/>
        </Container>
    )
}

export default Card;

const Container = styled.div`
text-align:center;
background-color:black;
width:auto;
width:100%;
border-left: 1.5px solid #FDC500;
`

const Text = styled.h2`
color:#F5B716`;

const Image = styled.img`
height:auto;
width:auto;
height:7em;
width:7em;
`;