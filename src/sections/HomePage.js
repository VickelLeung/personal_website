import React from "react";
import Card  from "../share-components/Cards/Card";
import styled from "styled-components";
import { SkillCard } from "../share-components/Cards/SkillCard";
import webDesign from "../Images/webDesign.png";
import webDeveloper from "../Images/webDeveloper.png";
import software from "../Images/software.png";
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
                    <SkillCard title="Language and tools" >Javascript, Java, C++, NodeJS, MySql, MongoDB, Github, Gitlab, Visual Studio, Eclipse, WindowsOS, MacOS</SkillCard>
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