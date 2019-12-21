import React from "react";
import styled from "styled-components";
import Test from "../../Images/calculator.png";

function PortfolioCard(props){

    const { imageCover, title } = props;

    return(
        
        <Wrapper>
            <Title>{title}</Title>

            <InfoWrapper>
                <Image src={imageCover} />
                <LinkContainer>
                    <p>Icon</p>
                </LinkContainer>
            </InfoWrapper>
        </Wrapper>
    )
}

export {PortfolioCard};

const Wrapper = styled.div`
text-align:center;
margin: 0 3%;
padding:2%;
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.17);
border: 0.5px solid rgba(0,0,0,0.05);

&:hover {
    background-color: rgba(0,0,0,0.05); /* Black w/ opacity */
  }

`;

const Title = styled.h2`color:#F5B716;`;

const Image = styled.img`
height:auto;

width:auto;
height:100%;
width:100%;
max-width:200px;
max-height:200px;
`;

const LinkContainer = styled.div`
float:right;
`;

const InfoWrapper = styled.div`
flex: 0 0 22%;
margin: 4%;
text-align:center;
`