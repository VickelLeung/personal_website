import React from "react";
import styled from "styled-components";
// import Test from "../../Images/calculator.png";
import Chip from '@material-ui/core/Chip';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

import Img from "../../Images/portfolio/calculator.png";

function PortfolioCard(props){

  const { imageCover, title, description ,icon, skill, projectLink } = props;

  let chip = skill != undefined && skill.map((item)=>{
    return  <Chip label={<i className={item.icon}><span> {item.name}</span></i>}></Chip>
  })

    return(      
        <Wrapper>
          <Card >   
            <CardMedia
              component="img"
              style={{objectFit:"contain"}}
              alt={title}
              height="140"
              image={imageCover}
              title="Click for demo"
            />
            <CardContent style={{borderBottom: "1px solid rgba(0,0,0,0.1)", margin: "0 3%"}}>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               {description}
              </Typography>
              {chip}

            </CardContent>
        
          <CardActions>
            <LinkContainer>
                {/* <LanguageContainer>
                  <Chip label={<i className={icon}><span> ReactJs</span></i>}></Chip>
                </LanguageContainer> */}
                <CodeContainer>
                  {projectLink === undefined? null: <Button href={projectLink} target="_blank" ><i class="fas fa-file-code fa-2x" /></Button>}
                
                </CodeContainer>
            </LinkContainer>
          </CardActions>
      </Card>
        </Wrapper>
    )
}

export {PortfolioCard};

const Wrapper = styled.div`
width: 25%;
height: 40%;
text-align:center;
margin: 0 3%;
margin-bottom: 4%;

&:hover {
    background-color: rgba(0,0,0,0.05); /* Black w/ opacity */
  }

  @media screen and (max-width: 420px) {
    width: 50%;
   
 }

`;

const Title = styled.h2`color:#F5B716;`;

const Image = styled.img`
height:auto;
width:auto;
height:10em;
width:10em;
object-fit: cover;

`;
// display:flex;
// justify-content: space-between;
const LinkContainer = styled.div`
text-align:right;
width:100%;
`;

const InfoWrapper = styled.div`
flex: 0 0 22%;
margin: 4%;
display:flex;
flex-direction:column;
text-align:center;
`

const CodeContainer = styled.div``;

const LanguageContainer = styled.div``;