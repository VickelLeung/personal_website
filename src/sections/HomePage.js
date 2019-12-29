import React from "react";
import Card  from "../share-components/Cards/Card";
import styled from "styled-components";
import { SkillCard } from "../share-components/Cards/SkillCard";
import {Skill} from "../component/Skill/Skill";
import webDesign from "../Images/webDesign.png";
import webDeveloper from "../Images/webDeveloper.png";
import software from "../Images/software.png";
// import { mdiVisualStudioCode } from '@mdi/js';
// import { SocialIcon } from 'react-social-icons';

// https://patricktran.github.io/react-image-fade-in/?knob-opacityTransition%20%28seconds%29=3&knob-src=https%3A%2F%2Fraw.githubusercontent.com%2Fpatricktran%2Freact-image-fade-in%2Fmaster%2Fnismo-dog.jpg&selectedKind=ImageFadeIn&selectedStory=with%20image&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel

class Homepage extends React.Component{
    render(){

        return(
        <Wrapper>
            <MainContainer>
                <Quote>Sometimes things are meant to happen but it does not mean it is meant to be.</Quote>
                <SocialMediaIcon>
                    {/* <GithubLink url="https://github.com/" />
                    <SocialIcon url="https://linkedin.com/jaketrent" />
                    <SocialIcon url="https://email.com/" href="mailto:contact@test.com"/>
                    <SocialIcon url="https://facebook.com/jaketrent" /> */}
                </SocialMediaIcon>
            </MainContainer>
            <SkillContainer>
                <LanguageContainer>
                   <SkillCard title="Languages and tools" >
                        <Skill title="html5" iconImg="fab fa-html5 fa-2x"/>
                        <Skill title="css3" iconImg="fab fa-css3-alt fa-2x"/>
                        <Skill title="javascript" iconImg="fab fa-js-square fa-2x"/>
                        <Skill title="reactJs" iconImg="fab fa-react fa-2x"/>
                        <Skill title="java" iconImg="fab fa-java fa-2x"/>
                        <Skill title="c++" altImg="https://img.icons8.com/ios-filled/30/000000/c-plus-plus-logo.png"/>
                        <Skill title="nodeJs" iconImg="fab fa-node fa-2x"/>
                        <Skill title="mysql" altImg="https://img.icons8.com/ios-filled/30/000000/mysql-logo.png" />
                        <Skill title="mongoDb" altImg="https://img.icons8.com/color/30/000000/mongodb.png" />
                        <Skill title="github" iconImg="fab fa-github-square fa-2x"/>
                        <Skill title="visual studio" altImg="https://img.icons8.com/ios-glyphs/30/000000/visual-studio.png" />
                        <Skill title="windowsOs" iconImg="fab fa-windows fa-2x" />
                        <Skill title="macOs" iconImg="fab fa-apple fa-2x" />
                   </SkillCard>
                   {/* Javascript, Java, C++, NodeJS, MySql, MongoDB, Github, Gitlab, Visual Studio, Eclipse, WindowsOS, MacOS */}
                   
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
margin: 6% 5%;
color:#F5B716;
`

const MainContainer = styled.div`
height:auto;
min-height: 34em;
border: 1px solid black;
background-color:#434242;
`;

const SkillContainer = styled.div`
display:flex;
flex-direction:row;
height:auto;
min-height: 15em;
width:100%;
`

const LanguageContainer = styled.div`
background-color:#FDC500;
width:40%;

`;

const CardContainer = styled.div`
display:flex;
flex-direction:row;
width:60%;


`;

const SocialMediaIcon = styled.div`


`;

// const GithubLink = styled(SocialIcon)`

// .social-svg-mask{
//     color:black;
// }
// `;