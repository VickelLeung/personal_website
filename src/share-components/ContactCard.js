import React from "react";
import styled from "styled-components";

const ContactCard = (props) =>{
    return(
        <Wrapper>
            <image src={props.images} />
            <Info>{props.children}</Info>

        </Wrapper>
    )
}

export {ContactCard}

const Wrapper = styled.div``;
const Info = styled.p``;