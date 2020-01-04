import React from "react";
import styled from "styled-components";
import { Timeline } from "../component/timeline/Timeline";
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Resume from "../resume/resume.pdf";
import { Hobby } from "../component/Hobby/Hobby";

class AboutPage extends React.Component{
    render(){
        return(
            <Wrapper>
                <Title>About me</Title>
                <AboutContainer>
                    <MainContainer>
                        <GeneralContainer>
                        {/* <ImageBox>
                           
                        </ImageBox> */}
                        <div>
                            <InformationBox>
                                <Header>Vickel Leung</Header>
                                {/* <SubTitle>Web Developer</SubTitle> */}
                                <Information>
                                    Hello there! <br/><br />
                                    
                                    I am a web developer that enjoys creating things from scratch to something awesome!
                                    Strong passion in learning new technology and using it to improve my skill. <br /> <br />

                                    I am not just all coding. If I have free time, I do make the most out of it by relaxing my body.
                                    My belief is that a healthy body will give a healthy mind. For that reason, I always try to eat heatlhy and go to gym regularly. <br /> <br/>
                                    
                                    I want to make a difference in the world by writing one line code at a time.
                                    Thanks for reading my page.

                                </Information>
                            </InformationBox>
                            <Button href={Resume} download variant="contained">Download Resume</Button>
                        </div>
                        </GeneralContainer>
                    

                    </MainContainer>
                    <SecondContainer>
                        {/* <FactWrapper> */}
                            <FactBox>
                                <Header>Fun facts about me</Header>
                                <BulletPoints>1- I love trying new food unless it's bugs</BulletPoints>
                                <BulletPoints>2- I have never broken a bone before</BulletPoints>
                                <BulletPoints>3- Funko pop collector!</BulletPoints>
                                <BulletPoints>4- Art/Music/Writing help me escape reality</BulletPoints>
                                <BulletPoints>5- People drink coffee daily, I drink tea :)</BulletPoints>
                                <BulletPoints>6- I am scared of heights </BulletPoints>
                                <BulletPoints>7- Mega duper huge fan of Dragon Ball</BulletPoints>
                                <BulletPoints>8- I won a silver medal for regional at double badminton</BulletPoints>
                                <BulletPoints>9- My pr for deadlift, squat and bench are 295/275/140</BulletPoints>
                            </FactBox>
                        {/* </FactWrapper> */}
                    </SecondContainer>
                    
                </AboutContainer>
                
                <Title>Hobby</Title>
                <Hobby />

                <TimeContainer>
                    <Timeline />
                </TimeContainer>
            </Wrapper>
        )
    }
}

export {AboutPage};

const Title = styled.h1`text-align:center;`;

const SubTitle = styled.h3``;

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
height:100%;
border-left: 3px solid black;
`;

const InformationBox = styled.div`
border:2px solid black;
padding:4%;
margin-bottom: 4%;
`;

const Header = styled.h1``;

const Information = styled.p`
text-align:left;
`;

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
height:100%;
width:100%;
margin-bottom:5%;

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

const FactWrapper = styled.div`
width:40%;
border-left: 3px solid black;
`;