import React from "react";
import meetup from "./meetup.jpg";
import Map from "../Map";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Footer from "../Footer";
import NavBar from "../NavBar"

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
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
function Community() {

 const classes = useStyles();
  return (
    <>
    <NavBar />
      <br></br>
      <h4>Communities of enthusiasts around the world.</h4>
      <br></br>
      <div>
        <Map />
      </div>
      <br></br>
      <p>
        Would you like us to add your community? feel free to contact us at
        edunodeapp@gmail.com
      </p>
      <h1>Conferences</h1>

      <Grid container spacing={4}>

    
           <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../resources/me2020.png')}
                    title="Dev Google Group"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Meridian 2020
                    </Typography>
                    <Typography>
                    Stellar Development Foundation's 2nd Meridian Conference will feature engaging content from within and beyond the Stellar community, delivered virtually and free for everyone! 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://meridian.stellar.org/">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../resources/mo2020.png')}
                    title="Dev Google Group"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Money 2020
                    </Typography>
                    <Typography>
                    MONEY20/20: where the ones to watch, in-the-know, most exciting and innovative players come to create the future of money.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://asia.money2020.com/company/stellar-development-foundation">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

           </Grid>

           <h1>Podcasts</h1>

           <Grid container spacing={4}>

    
           <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../resources/stellarpodcast.PNG')}
                    title="Dev Google Group"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    The Stellar Podcast
                    </Typography>
                    <Typography>
                    Stellar is an open financial network built for speed and efficiency. With over 4 million accounts and a 5-second ledger close time, Stellar is the right choice for your financial service or application.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://podcast.stellar.org/">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../resources/publicnode1.PNG')}
                    title="Dev Google Group"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Public Node Podcast
                    </Typography>
                    <Typography>
                    Brian and Daniel kickoff Public Node's first podcast and provide their shared inclusive vision for future podcasts by inviting the Stellar community to come be a part in forming future discussions.  
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://podcast.publicnode.org/1083677">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              

           </Grid>

           <h1>Meetups</h1>

           <Grid container spacing={4}>


           <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require('../resources/stellarat.png')}
                    title="Dev Google Group"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Stellar Austria Developers Meetup
                    </Typography>
                    <Typography>
                    We are a group of entrepreneurs, developers, and investors in Austria, that are passionate about the Stellar Network and that want to support its growth.  
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href="https://www.stellar.org/events/stellar-austria-developers-meetup">
                    Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              
           
           </Grid>
           <Footer />
    </>
  );
}

export default Community;
