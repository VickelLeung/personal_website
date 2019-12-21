import React from "react";
import styled from "styled-components";
import { ContactCard } from "../share-components/ContactCard";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Contact (){
    return(
        <div>
            <TitleContainer>
                <Title>Contact</Title>
            </TitleContainer>
            

            <MainContainer>
                <Information>
                    <h2>Contact information</h2>
                    <ContactCard >Vickelleung@gmail.com</ContactCard>
                    <ContactCard >514-815-8638</ContactCard>
                    <ContactCard >Montreal, Qc</ContactCard>
                </Information>

                <MessageBox>
                    <h2>Send me a message</h2>
                    <InputField
                    style={{margin: '5% 0'}}
                        id="input_name"
                        label="name"
                        type="text"
                        variant="outlined"
                    />
                     <InputField
                     style={{margin: '5% 0'}}
                        id="email"
                        label="email"
                        type="email"
                        variant="outlined"
                    />
            
                    <InputField
                    style={{margin: '5% 0'}}
                        id="message"
                        label="Write your message here"
                        multiline
                        rows="4"
                        variant="outlined"
                    />
                    
                    
                    <SubmitBtn variant="lined" >Default</SubmitBtn>
                </MessageBox>
            </MainContainer>

        </div>
    )
}

export {Contact};

const Information = styled.div`
margin: 10% 6%;
border:2px solid black;
width:50%;
`;

const MessageBox = styled.div`
display:flex;
flex-direction:column;
margin: 10% 6%;
padding: 3%;
border:2px solid black;
width:50%;
`;

const MainContainer = styled.div`
display:flex;
flex-direction:row;
text-align:center;
height:100%;
width:100%;
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
