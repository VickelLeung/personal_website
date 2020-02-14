import React, {Component} from "react";
import styled from "styled-components";
import { HobbyCard } from "../../share-components/Cards/HobbyCard";



class Hobby extends React.Component {
    state={
        hoverVar:false
    }

    componentDidMount=()=>{
        let w = window.innerWidth;
        let boolVar = null;
        console.log("test: "+w);
    
        if(w>1000)
            boolVar = true;
        else 
        boolVar = false;

            this.setState({hoverVar: boolVar});
            console.log(boolVar);
    }

    render(){
    return(
        <Wrapper>
            <HobbyCard Icon={"fas fa-music fa-3x"} isHover={this.state.hoverVar} name={"Music"} description={"I enjoy listening and playing music instrument"}/>
            <HobbyCard Icon={"fas fa-gamepad fa-3x"} isHover={this.state.hoverVar} name={"Video Game"} description={"A gamer when I have free time"}/>
            <HobbyCard Icon={"fas fa-dumbbell fa-3x"} isHover={this.state.hoverVar} name={"Weightlifting"} description={"Weightlifting allow me to improve and challenge myself"}/>
            <HobbyCard Icon={"fas fa-plane fa-3x"} isHover={this.state.hoverVar} name={"Travel"} description={"Travel and explore new places"}/>
            <HobbyCard Icon={"fas fa-palette fa-3x"} isHover={this.state.hoverVar} name={"Art"} description={"A strong passion in creating art"}/>
        </Wrapper>
    )
    }
}

export {Hobby};

const Wrapper = styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;

@media screen and (max-width: 420px) {
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
 }
`;
