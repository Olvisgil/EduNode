import React from "react";
import "./style.css";
import res from './res.png';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Footer from "../Footer"

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


function Resources() {
  const classes = useStyles();
    return (
      

        <div className="resources">
         
           <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
            Developer resources and community tools
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            

            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" href="https://www.stellar.org/developers">
                    Learn more
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End heo unit */}
          <Grid container spacing={4}>

          <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../resources/stellarlogo1.png')}
                    title="Dev Google Group"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    API Reference
                    </Typography>
                    <Typography>
                    Horizon is the client-facing API server for the Stellar ecosystem. It acts as the interface between Stellar Core and applications that want to access the Stellar network. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://www.stellar.org/developers/reference/">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('./googlegroups1.png')}
                    title="Dev Google Group"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Dev Google Group
                    </Typography>
                    <Typography>
                    This group is here to discuss Core Advancement Proposals (CAPs) and Stellar Ecosystem Proposals (SEPs), and to talk about development of stellar-core, Horizon, and the rest of the Stellar platform. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://groups.google.com/forum/#!forum/stellar-dev">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('./ser.png')}
                    title="Dev Google Group"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                   Stellar StackExchange
                    </Typography>
                    <Typography>
                    Stellar Stack Exchange is a question and answer site for developers and users of Stellar and the Stellar Distributed Exchange.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://stellar.stackexchange.com/">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../resources/gtr.png')}
                    title="Dev Google Group"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    GalacticTalk
                    </Typography>
                    <Typography>
                    We are a community of Stellar users, developers and traders. Join us in our mission of spreading financial inclusion globally. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://groups.google.com/forum/#!forum/stellar-dev">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../resources/stellarlogo1.png')}
                    title="Dev Google Group"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Dev Guides
                    </Typography>
                    <Typography>
                    These guides are designed to help you learn more about the technical aspects of integrating Stellar into your application or service, from the very basics to more detailed topics like submitting transactions at a high rate with channels.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://www.stellar.org/developers/guides/">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>



              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../resources/sxr.png')}
                    title="Dev Google Group"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    StellarX
                    </Typography>
                    <Typography>
                   A fast, free and decentralized crypto platform with global fiat gateways. You can trade bitcoin for Euros for Chinese Yuan on StellarX. That’s not possible anywhere else.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://www.stellarx.com/">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../resources/stexr.png')}
                    title="Dev Google Group"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Stellar Expert
                    </Typography>
                    <Typography>
                    Ledger explorer and analytics platform for Stellar Network.                    
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://stellar.expert/">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../resources/stellarterm1.png')}
                    title="Dev Google Group"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                   StellarTerm
                    </Typography>
                    <Typography>
                    Open source client for the Stellar network. Send, receive, and trade assets on the Stellar network
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://stellarterm.com/">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              

              

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../resources/stellarlogo1.png')}
                    title="Dev Google Group"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Stellar Laboratory
                    </Typography>
                    <Typography>
                   The laboratory can build transactions, sign them, and submit them to the network. It can also make requests to any of the Horizon endpoints.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://www.stellar.org/laboratory">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../resources/kelp1.png')}
                    title="Dev Google Group"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Kelp
                    </Typography>
                    <Typography>
                    Kelp is a free, customizable, open-source trading bot for the Stellar universal marketplace.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://kelpbot.io/">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              
            
          </Grid>    

        </Container>

        <Container className={classes.cardGrid} maxWidth="md">

        <h3>Courses</h3>
        <Grid container spacing={4}>
        
          <Grid item xs={12} sm={6} md={4}>
          
          <br></br>
          <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('./lumen.png')}
                    title="Dev Google Group"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Stellar Overview Course
                    </Typography>
                    <Typography>
                    Get started by learning more about the Stellar network, how to store lumens, how to trade on the Stellar decentralized exchange, and more.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://www.lumenauts.com/courses/stellar-overview-course">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>

               
                
                
          </Grid>

           <Grid item xs={12} sm={6} md={4}>

          <br></br>
          <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('./coinbase2.png')}
                    title="Dev Google Group"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Learn Stellar. Earn XLM.
                    </Typography>
                    <Typography>
                    Stellar is a platform that connects banks, payment systems, and people. Learn how it works and you’ll earn XLM.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://www.coinbase.com/earn/stellar">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>

          </Grid> 
          

                
                
                
          </Grid>

        </Container>

        


      </main>

      <Footer />
               

                
<br></br>
<br></br>

  </div>   

          
    );
}

export default Resources;