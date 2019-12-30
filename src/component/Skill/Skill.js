import React from "react";
import styled from "styled-components";

const Skill =(props)=>{

let image = null;
    if(props.iconImg === undefined){
        image = <img style={{filter: "grayscale(100%)"}} src={props.altImg} />
    }
    else
        image =  <i className={props.iconImg}/>

    return(
        <Wrapper>
            <IconContainer>
               {image}
            </IconContainer>
            {props.title}
        </Wrapper>
    )
}

export {Skill};

const Wrapper = styled.div`
flex: 0 12%;
text-align:center;
margin: 2% 4%;
`;

const IconContainer = styled.div`
border-bottom: 1.5px solid black;
margin-bottom: 4%;
padding-bottom: 4%;
`;