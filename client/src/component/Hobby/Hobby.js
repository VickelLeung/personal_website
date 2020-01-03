import React from "react";
import styled from "styled-components";
import { HobbyCard } from "../../share-components/Cards/HobbyCard";

const Hobby = () =>{
    return(
        <Wrapper>
        {/* <HobbyContainer> */}
            <HobbyCard Icon={"fas fa-music fa-3x"} isHover={true} name={"Music"} description={"I enjoy listening and playing music instrument"}/>
            <HobbyCard Icon={"fas fa-gamepad fa-3x"} isHover={true} name={"Video Game"} description={"A gamer when I have free time"}/>
            <HobbyCard Icon={"fas fa-dumbbell fa-3x"} isHover={true} name={"Weightlifting"} description={"Weightlifting allow me to improve and challenge myself"}/>
            <HobbyCard Icon={"fas fa-plane fa-3x"} isHover={true} name={"Travel"} description={"Travel and explore new places"}/>
            <HobbyCard Icon={"fas fa-palette fa-3x"} isHover={true} name={"Art"} description={"A strong passion in creating art"}/>
        {/* </HobbyContainer> */}
        </Wrapper>
    )
}


export {Hobby};

const Wrapper = styled.div`
display:flex;
flex-direction:row;
justify-content: center;
`;

const Title = styled.h1``;
