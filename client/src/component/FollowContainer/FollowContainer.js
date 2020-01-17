import React from "react";
import { FollowIcon } from "../../share-components/FollowIcon/FollowIcon";
import styled from "styled-components";

const FollowContainer =(props) =>{
    return(
        <Wrapper>

            <Link href="https://ca.linkedin.com/in/vickelleung"> 
                <FollowIcon icon="fab fa-linkedin fa-2x"/>
            </Link>
            <Link href="https://github.com/VickelLeung">
                <FollowIcon icon="fab fa-github-square fa-2x"/>
            </Link>
            <Link href="https://www.facebook.com/vickel.leung">
                <FollowIcon icon="fab fa-facebook-square fa-2x"/>
            </Link>
            <Link href="https://www.instagram.com/vickelleung/">
                <FollowIcon icon="fab fa-instagram fa-2x"/>
            </Link>

        </Wrapper>
    )
}

export {FollowContainer};

const Wrapper = styled.div`
display:flex;
flex-direction:row;
width:100%;
@media screen and (max-width: 420px) {
    flex-wrap:wrap;
 }
`;

const Link = styled.a`
text-decoration:none;
color:black;
margin: 0.6% 0.6%
@media screen and (max-width: 420px) {
    flex: 0 0 25%;
 }
`;