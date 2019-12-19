import React from "react";
import styled from "styled-components";
import { Timeline } from "../component/timeline/Timeline";
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Resume from "../resume/resume.pdf";

class AboutPage extends React.Component{
    render(){
        return(
            <Wrapper>
                <Title>About me</Title>
                <AboutContainer>
                    <MainContainer>
                    <span style={{fontSize:"3em;", color: "Tomato;"}}>
                    <i className="fas fa-camera" />
                    </span>
                        <GeneralContainer>
                        {/* <ImageBox>
                           
                        </ImageBox> */}
                        <div>
                            <InformationBox>
                                <Header>Hello! I'm Vickel</Header>
                                <Information>Thanks for reading my page. I am a young aspiring programmer that enjoy coding a lot!

                                </Information>
                            </InformationBox>
                            <Button href={Resume} download variant="contained">Download Resume</Button>
                        </div>
                        </GeneralContainer>
                    
                    </MainContainer>
                    <SecondContainer>
                        <FactBox>
                            <Header>Fun facts about me</Header>
                            <BulletPoints>1- I love food</BulletPoints>
                            <BulletPoints>2- I never broken a bone before</BulletPoints>
                            <BulletPoints>3- Funko pop collector!</BulletPoints>
                            <BulletPoints>4- Art/Music/Writing help me escape reality</BulletPoints>
                            <BulletPoints>5- People drink coffee daily, I drink boba :)</BulletPoints>
                            <BulletPoints>6- I am scared of height </BulletPoints>
                            <BulletPoints>7- Mega duper huge fan of Dragon Ball</BulletPoints>
                            <BulletPoints>8- I won a silver medal for regonial at double badminton</BulletPoints>
                            <BulletPoints>9- My pr for deadlift, squat and bench are 285/225/140</BulletPoints>
                        </FactBox>
                    </SecondContainer>
                </AboutContainer>

                <TimeContainer>
                    <Timeline />
                </TimeContainer>
            </Wrapper>
        )
    }
}

export {AboutPage};

const Title = styled.h1`text-align:center;`;

const Wrapper = styled.div`
height:auto;
`

const MainContainer = styled.div`
    height:50%;
    display:relative;
    width:60%;
`;

const SecondContainer = styled.div`
width:40%;
border-left: 3px solid black;
`;

const InformationBox = styled.div`
border:2px solid black;
padding:4%;
margin-bottom: 4%;
`;

const Header = styled.h1``;

const Information = styled.p``;

const BulletPoints = styled.p`
text-align:justify;
`;

const FactBox = styled.div`
border:2px solid black;
padding:4%;
margin:0 8%;
text-align:center;
`;

const AboutContainer = styled.div`
display:flex; 
flex-direction:row;
width:100%;
margin-bottom:10%;

`;

const GeneralContainer = styled.div`
position:relative;
margin-left:40%;
margin-right:6%;
text-align:center;
`;
// background-color:#434242;
const TimeContainer = styled.div`
background-color: #413F3F;
`;
// background-color: #E5E5E5;
const ImageBox = styled.div`

`;