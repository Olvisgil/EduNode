import React from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Complex from "./Complex"
import Footer from "../Footer"
import { Redirect } from "react-router-dom"
import "./style.css";


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// const cards = [1, 2, 3];


function Hometwo() {
  const classes = useStyles();



    return (
    <>
    <Container maxWidth="sm">
            <Typography component="h3" variant="h2" align="center" color="textPrimary" gutterBottom>
             EduNode
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Learn about building on the Stellar Network and connect with community members. (Currently in Beta)

            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                
                    
                 
                </Grid>
              </Grid>
            </div>
          </Container>
          <br></br>
          <br></br>
          <Container>
          <Complex />
          </Container>
          <Container>
          <Footer />
          </Container>
    
    </>
    )
}

export default Hometwo;