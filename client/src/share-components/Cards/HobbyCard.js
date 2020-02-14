import React from "react";
import styled from "styled-components";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const HobbyCard = (props) =>{
   
    return(<Flippy
                flipOnHover={props.isHover} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '12em', height: '12em'}} /// these are optional style, it is not necessary
            >
                <FrontSide
                style={{
                    backgroundColor: 'black',
                    display:"flex",
                    textAlign:"center",
                    alignItems: "center",
                    flexDirection:"column",
                    justifyContent: "center"
                }}
                >
                <i style={{color:"white"}} className={props.Icon} />
                <Title>
                    {props.name}
                </Title>
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#FDC500'}}>
                <Description>
                    {props.description}
                </Description>
                </BackSide>
            </Flippy>
    )
}

export {HobbyCard};

// const Wrapper = styled.div`
// height:100%;
// width:100%;

// @media screen and (max-width: 420px) {
//   text-align:center;
//  }

// `;

const Title = styled.h2`
text-align:center;
color:white;
`;

const Description = styled.h3`
text-align:center;
color:white;
`;
