import React from "react";
import styled from "styled-components";
import { PortfolioCard } from "../share-components/Cards/PortfolioCard";
import { CardTitle } from "../share-components/Cards/CardTitle";
import Calculator from "../Images/portfolio/calculator.png";
import InfoRetrieve from "../Images/portfolio/inforetrieve.png";
import SimonSays from "../Images/portfolio/simonsay.png";
import TicTacToe from "../Images/portfolio/tictactoe.png";
import { Parallax } from 'react-scroll-parallax';

function Portfolio(){

    return(
        <Wrapper>
        <div style={{textAlign: "center"}}>
            {/* <Parallax className="custom-class" x={[-30, 30]} tagOuter="figure"> */}
            <Title>Portfolio</Title>
            {/* </Parallax> */}
        </div>
            
        <ContentWrapper>
            <TitleContainer>
                <CardTitle styling="linear-gradient(0deg, rgba(255,64,3,0) 0%, rgba(255,91,0,1) 70%);" 
                t="4px solid red">
                    Web application
                </CardTitle>
            </TitleContainer>
            <CardContainer>
                <PortfolioCard  skill={[{name:"ReactJs", icon:"fab fa-react fa-1x"}]} 
                    imageCover={Calculator} title="Password Generator"
                    projectLink="https://github.com/VickelLeung/Password_generator_in_react"
                    />
                <PortfolioCard  skill={[{name:"ReactJs", icon:"fab fa-react fa-1x"}]} 
                    imageCover={SimonSays} title="Simon Says"
                    projectLink="https://github.com/VickelLeung/Simon_Says"
                    />
                <PortfolioCard  skill={[{name: "java", icon: "fab fa-java fa-1x}"},{name: "jsp", icon: "test2"}, {name:"MySql"}]} 
                    imageCover={SimonSays} title="Book repository"
                    projectLink="https://github.com/VickelLeung/SOEN387A2"
                    />
            </CardContainer>
        </ContentWrapper>
        <ContentWrapper>
            <TitleContainer>
                <CardTitle styles="linear-gradient(0deg, rgba(3,209,255,0) 0%, rgba(0,157,255,1) 70%);">
                    Software
                </CardTitle>
            </TitleContainer>
            <CardContainer>
                <PortfolioCard skill={[{name:"Java", icon:"fab fa-java fa-1x"}]} 
                    imageCover={InfoRetrieve} title="Information Retrieval" 
                    />
                <PortfolioCard skill={[{name:"Java", icon:"fab fa-java fa-1x"}]} 
                    imageCover={TicTacToe} title="Tic Tac Toe"
                    projectLink="https://github.com/VickelLeung/TicTacToe_2.0_Android"
                    />
                <PortfolioCard skill={[{name:"Java", icon:"fab fa-java fa-1x"}]} 
                    imageCover={Calculator} title="Calculator"/>
                <PortfolioCard skill={[{name:"C++", icon:""}]} 
                    imageCover={""} title="Risk"
                    projectLink="https://github.com/VickelLeung/Risk-game"
                    />
            </CardContainer>
        </ContentWrapper>

            {/* <CardTitle>Software application</CardTitle>
            <CardContainer>
                <PortfolioCard title="Password Generator"/>
                <PortfolioCard title="Simon Says"/>
            </CardContainer> */}
      

        </Wrapper>
    )
}

export {Portfolio}

const Wrapper = styled.div`
display:flex;
flex-direction:column;
height: 100%;
width: 100%;
background-color:#fff;
`;
//background-color:#E5E5E5;
// background-color:#413F3F;
const ContentWrapper = styled.div`
display:flex;
flex-direction:row;
margin: 4% 0;

@media screen and (max-width: 420px) {
    flex-direction: column;
 }
`;

const CardContainer = styled.div`
display:flex;
flex-wrap:wrap;
alignItems: center;
width:70%;
`;

const TitleContainer = styled.div`
width:25%;
display:flex;
align-items: flex-start; /* Vertical center alignment */
justify-content: center; /* Horizontal center alignment */

@media screen and (max-width: 420px) {
    width:100%;
 }
`;

const Title = styled.h2`
margin: 4% 0;
`;