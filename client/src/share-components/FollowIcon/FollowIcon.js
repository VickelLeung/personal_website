import React from "react";
import styled from "styled-components";

const FollowIcon = (props) =>{
    return(
        <Wrapper>
                <i className={props.icon} />
        </Wrapper>
    )
}

export {FollowIcon};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6em;
    height: 6em;
    border:2px solid black
    border-radius: 10px;
    -webkit-transition: background 1s; /* For Safari 3.0 to 6.0 */
    transition: background 1s; /* For modern browsers */

    &:hover {
        background: black;
        color: white;
    }
`;