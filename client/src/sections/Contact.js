import React, { Component } from "react";
import styled from "styled-components";
import { ContactCard } from "../share-components/ContactCard";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FollowContainer } from "../component/FollowContainer/FollowContainer";
import axios from 'axios';

class Contact extends Component{

render(){
    return(
        <div>
            <TitleContainer>
                <Title>Contact</Title>
            </TitleContainer>
            
            <MainContainer>
                <Information>
                    <h2>Contact information</h2>
                    <ContactCard ><i className="fas fa-envelope"/> Vickelleung@gmail.com</ContactCard>
                    <ContactCard > <i className="fas fa-phone"/> 514-815-8638</ContactCard>
                    <ContactCard > <i className="fas fa-map-marker-alt"/> Montreal, Qc</ContactCard>
                    <Bar />
                    <SocialContainer>
                        <p>Follow me throught social media</p>
                        <FollowContainer />
                    </SocialContainer>
                </Information>

                <MessageBox>
                <form name="contact" method="post">
                <h2>Send me a message </h2>
                <input type="hidden" name="form-name" value="contact" />
       
                <InputField
                        style={{margin: '5% 0',width: "100%"}}
                        id="input_name"
                        label="Name"
                        name="name"
                        type="text"
                        variant="outlined"
                        ref="name"
                    />

                <InputField
                        style={{margin: '5% 0', width:"100% "}}
                        id="email"
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        required
                    />

                <InputField
                        style={{margin: '5% 0', width:"100%"}}
                        id="message"
                        name="message"
                        label="Write your message here"
                        multiline
                        rows="4"
                        variant="outlined"
                        required
                    />
                    <p>
                        <SubmitBtn type="submit">Send</SubmitBtn>
                    </p>
                    </form>
                </MessageBox>
            </MainContainer>

        </div>
    )
 }
}

export {Contact};

const Information = styled.div`
text-align: left;
margin: 6% 6%;
padding: 3%;
border:2px solid black;
border-radius: 2.5%;
width:50%;

@media screen and (max-width: 420px) {
   width: 70%;
   align-self: center;
 }
`;

const MessageBox = styled.div`
display:flex;
flex-direction:column;
margin: 6% 6%;
padding: 3%;
border:2px solid black;
border-radius: 2.5%;
width:50%;

@media screen and (max-width: 420px) {
    width: 70%;
    align-self: center;
 }
`;

const MainContainer = styled.div`
display:flex;
flex-direction:row;
text-align:center;
height:100%;
width:100%;

@media screen and (max-width: 420px) {
    flex-direction:column;
    align-item:center;
    justify-content:center;
 }
`;

const TitleContainer = styled.div`
text-align:center `;

const Title = styled.h2``;

const InputField = styled(TextField)`
.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
    border-color: #FDC500;
}

.MuiOutlinedInput-root.Mui-focused {
    color: black;
}

.MuiFormLabel-root.Mui-focused{
    color: #FDC500;
}

`;
// border-color: #FDC500;

const SubmitBtn = styled(Button)`
.MuiTouchRipple-root{
    color: #FDC500;
}

`;

const SocialContainer = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`;

const Bar = styled.div`
margin: 8% 0;
border-bottom: 1px solid black;

`;

// setupProxy
// const proxy = require('http-proxy-middleware');
// module.exports = function(app) {
//   app.use(
//     '/api',
//     proxy({
//       target: 'http://localhost:8080',
//       changeOrigin: true,
//     })
//   );
// };