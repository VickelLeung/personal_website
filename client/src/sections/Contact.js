import React, { Component } from "react";
import styled from "styled-components";
import { ContactCard } from "../share-components/ContactCard";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FollowContainer } from "../component/FollowContainer/FollowContainer";
import axios from 'axios';

class Contact extends Component{

state = {
    name:"",
    email:"",
    message:"",
}

// verifyInput=()=>{
//     if()
//     return true;

//     return false;
// }

submitInfo = () =>{
    // if(this.verifyInput()){

    // }
    const {name, email, message} = this.state;

    // axios.post('/send', { name, email, message })
    // .then((result) => {
    //  console.log("posted" + result);
    // });

    // console.log("it worked!");

    fetch('http://localhost:3001/send', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
   
          name : name,
          email : email,
          message : message
          
        })
        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({name:"",email:"",message:""})
            this.refs.name.value=""; 
              // Showing response message coming from server after inserting records.
              console.log(responseJson);
            
            }).catch((error) => {
              console.error(error);
            });

           
}   

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
                    <h2>Send me a message</h2>
           
                    <InputField
                        style={{margin: '5% 0'}}
                        id="input_name"
                        label="Name"
                        type="text"
                        variant="outlined"
                        ref="name"
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />
                     <InputField
                        style={{margin: '5% 0'}}
                        id="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        onChange={(e) => this.setState({ email: e.target.value })}
                    />
            
                    <InputField
                        style={{margin: '5% 0'}}
                        id="message"
                        label="Write your message here"
                        multiline
                        rows="4"
                        variant="outlined"
                        onChange={(e) => this.setState({ message: e.target.value })}
                    />
                   
                    <SubmitBtn onClick={this.submitInfo} variant="lined" >Submit</SubmitBtn>
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
width:50%;

`;

const MessageBox = styled.div`
display:flex;
flex-direction:column;
margin: 6% 6%;
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