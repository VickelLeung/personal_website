import React from "react";
import { FollowIcon } from "../../share-components/FollowIcon/FollowIcon";
import styled from "styled-components";

const FollowContainer =(props) =>{
    return(
        <Wrapper>

            <Link href="www.google.com"> 
                <FollowIcon icon="fab fa-linkedin fa-2x"/>
            </Link>
            <Link>
                <FollowIcon icon="fab fa-github-square fa-2x"/>
            </Link>
            <Link>
                <FollowIcon icon="fab fa-facebook-square fa-2x"/>
            </Link>
            <Link>
                <FollowIcon icon="fab fa-google-plus-square fa-2x"/>
            </Link>

        </Wrapper>
    )
}

export {FollowContainer};

const Wrapper = styled.div`
display:flex;
flex-direction:row;
`;

const Link = styled.a`
text-decoration:none;
color:black;
margin-right: 0.4%;
margin-left: 0.4%;

`;