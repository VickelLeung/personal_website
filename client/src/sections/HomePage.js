import React from "react";
import Card  from "../share-components/Cards/Card";
import styled from "styled-components";
import { SkillCard } from "../share-components/Cards/SkillCard";
import {Skill} from "../component/Skill/Skill";
import webDesign from "../Images/webDesign.png";
import webDeveloper from "../Images/webDeveloper.png";
import software from "../Images/software.png";
import {SocialContainer} from "../component/SocialContainer/SocialContainer"
import backgroundImg from "../Images/backgroundImg.png";

// https://patricktran.github.io/react-image-fade-in/?knob-opacityTransition%20%28seconds%29=3&knob-src=https%3A%2F%2Fraw.githubusercontent.com%2Fpatricktran%2Freact-image-fade-in%2Fmaster%2Fnismo-dog.jpg&selectedKind=ImageFadeIn&selectedStory=with%20image&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel

class Homepage extends React.Component{
    render(){

        return(
        <Wrapper>
            <MainContainer >
            </MainContainer>
            <SkillContainer>
                <LanguageContainer>
                   <SkillCard title="Languages and tools" >
                        <Skill title="HTML5" iconImg="fab fa-html5 fa-2x"/>
                        <Skill title="CSS3" iconImg="fab fa-css3-alt fa-2x"/>
                        <Skill title="JavaScript" iconImg="fab fa-js-square fa-2x"/>
                        <Skill title="ReactJs" iconImg="fab fa-react fa-2x"/>
                        <Skill title="Java" iconImg="fab fa-java fa-2x"/>
                        <Skill title="C++" altImg="https://img.icons8.com/ios-filled/30/000000/c-plus-plus-logo.png"/>
                        <Skill title="NodeJs" iconImg="fab fa-node fa-2x"/>
                        <Skill title="Mysql" altImg="https://img.icons8.com/ios-filled/30/000000/mysql-logo.png" />
                        <Skill title="mMngoDb" altImg="https://img.icons8.com/color/30/000000/mongodb.png" />
                        <Skill title="Github" iconImg="fab fa-github-square fa-2x"/>
                        <Skill title="Visual Studio" altImg="https://img.icons8.com/ios-glyphs/30/000000/visual-studio.png" />
                        <Skill title="WindowsOs" iconImg="fab fa-windows fa-2x" />
                        <Skill title="MacOs" iconImg="fab fa-apple fa-2x" />
                   </SkillCard>
           
                </LanguageContainer>
                <CardContainer>
                    <Card image={webDesign}>UI/UX</Card>
                    <Card image={webDeveloper}>Web Developer</Card>
                    <Card image={software}>Software Developer</Card>
                </CardContainer>
            </SkillContainer>
        </Wrapper>
        )
    }
}

export {Homepage}

const Wrapper = styled.div`
width:auto;
height:auto;
`;

const Quote = styled.h1`
font-size: 2.5em;
width:40%;
margin: 0 5%;
padding-top: 12%;
color:#F5B716;


@media screen and (max-width: 420px) {
    justify-content:center
    text-align:center;
    font-size: 2em;
    width: 70%;
    height:100%;
   }
`
// background-color:#434242;
const MainContainer = styled.div`
height:auto;
min-height: 60vh;

background-image: url(${backgroundImg});
background-position: center;
background-repeat: no-repeat;

background-attachment: fixed;
max-width: 100%;

@media screen and (max-width: 420px) {
    min-height: 40vh;
    background-size: contain;
    background-position: top 10% center;
}
`;

const SkillContainer = styled.div`
display:flex;
flex-direction:row;
height:auto;
min-height: 35vh;
width:100%;

@media screen and (max-width: 420px) {
    display:flex;
    flex-direction:column;
    height:auto;
  
    width:100%;
}
`

const LanguageContainer = styled.div`
background-color:#FDC500;
width:40%;
@media screen and (max-width: 420px) {
   width:100%;
}
`;

const CardContainer = styled.div`
display:flex;
flex-direction:row;
width:60%;
@media screen and (max-width: 420px) {
    width:100%;
    flex-direction:column;
 }
`;

const SocialMediaIcon = styled.div`

`;

const QuoteContainer = styled.div`
 display:flex;
 text-align:center;
 justify-content:center;
 height:100%;
`;