import React from "react";
import styled from "styled-components";
import { ContactCard } from "../share-components/ContactCard";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Contact (){
    return(
        <div>
            <p>contact</p>

            <MainContainer>
                <Information>
                    <h2>Contact information</h2>
                    <ContactCard >Vickelleung@gmail.com</ContactCard>
                    <ContactCard >514-815-8638</ContactCard>
                    <ContactCard >Montreal, Qc</ContactCard>

                </Information>

                <MessageBox>
                    <h2>Send me a message</h2>
                    <TextField
                        id="input_name"
                        label="name"
                        type="text"
                        variant="outlined"
                    />
                     <TextField
                        id="email"
                        label="email"
                        type="email"
                        variant="outlined"
                    />
                    <TextField
                        id="message"
                        label="Multiline"
                        multiline
                        rows="4"
                        variant="outlined"
                    />
                    
                    <Button variant="outlined" >Default</Button>
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
margin: 10% 6%;
border:2px solid black;
width:50%;
`;

const MainContainer = styled.div`
display:flex;
flex-direction:row;
text-align:center;
height:100%;
width:100%;
border:2px solid red;
`;

const TextArea = styled.textarea`
overflow:auto; 
resize:none; 
width:400px; 
height:200px; 
`;