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

    const { imageCover, title, icon, lang } = props;

    return(
        
        <Wrapper>
            {/* <Title>{title}</Title>

            <InfoWrapper>
                <Image src={imageCover} />
                <LinkContainer>
                    <Chip label={<i className={icon}></i>}></Chip>
                </LinkContainer>
            </InfoWrapper> */}

<Card >
      <CardActionArea>
        <CardMedia
          component="img"
          style={{objectFit:"contain"}}
          alt={title}
          height="140"
          image={imageCover}
          title="Click for demo"
        />
        <CardContent style={{borderBottom: "1px solid black", margin: "0 3%"}}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          <Chip label={<i className={icon}><span> ReactJs</span></i>}></Chip>
           
        </CardContent>
      </CardActionArea>
      <CardActions>
        <LinkContainer>
            {/* <LanguageContainer>
              <Chip label={<i className={icon}><span> ReactJs</span></i>}></Chip>
            </LanguageContainer> */}
            <CodeContainer>
             <Button href="http://www.google.com" target="_blank" ><i class="fas fa-file-code fa-2x" /></Button>
            </CodeContainer>
        </LinkContainer>

        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
        </Wrapper>
    )
}

export {PortfolioCard};

const Wrapper = styled.div`
width: 35%;
text-align:center;
margin: 0 3%;
margin-bottom: 4%;


&:hover {
    background-color: rgba(0,0,0,0.05); /* Black w/ opacity */
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