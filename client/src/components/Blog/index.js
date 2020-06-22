import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import mb from "./mainblog.png"
import sa from "./stellarassets.png"
import ek from "./keybase_icon_132271.png"
import ec from "./economics.png"
import NavBar from "../NavBar"




const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


const posts = [{
  id: "3",
  title: "titulo3",
  body: "contenido de preba",
  url: "url"
}, {
  id: "2",
  title: "titulo2",
  body: "contenido de preba",
  url: "url"
}, {
  id: "1",
  title: "titulo",
  body: "contenido de preba",
  url: "url"
}];




const mainFeaturedPost = {
  title: 'EduNode: educational platform on the Stellar Network',
  description:
    "Join the increasing number of developers using revolutionary technology to build the best fintech companies of the future.",
  image: mb,
  imgText: 'EduNode',
  linkText: 'Read more…',
  link: "EduNode-your-educational-platform-on-the-Stellar-Network"
};

const featuredPosts = [
  {
    title: 'How to issue an asset on Stellar',
    date: '14/05/2020',
    description:
      'Here you will learn how to issue an asset on the Stellar Network using the Stellar Network.',
    image: sa,
    imageText: 'Image Text',
    link: "EduNode-your-educational-platform-on-the-Stellar-Network"
  },
  {
    title: 'What is Keybase?',
    date: '23/05/2020',
    description:
      'Keybase is the best privacy-focused messaging tool with a native integration of the Stellar network.',
    image: ek,
    imageText: 'Keybase',
    link: "What-is-Keybase?"
  },
  {
    title: 'Stellarnomics',
    date: '14/06/2020',
    description:
      'Monetary aspects of the Stellar Consensus Protocol and its steps towards decentralization',
    image: ec,
    imageText: 'Stellarnomics',
    link: "Stellarnomics"
  }
];



const sidebar = {
  title: 'About',
  description:
    "Welcome to EduNode's blog.",
  social: [
    { name: "GitHub", icon: GitHubIcon, url: "https://github.com/Olvisgil/EduNode" },
    { name: '    Twitter', icon: TwitterIcon, url: "https://twitter.com/edunode_"}
  ],
};



export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavBar />
<br></br>
      <Container maxWidth="lg">
        <Header title="Welcome to EduNode's Blog" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="" posts={posts} />
            
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
              
            />
          </Grid>
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}