import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Article from "./Article"



export default function Main(props) {
  const { posts, title } = props;

  // const articleList = posts.map((post, i) => {
  //   console.log(post)
  //   return(
  //   <div key={post.id}><Article /></div>

  //   )
  // }
  // )



  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
      </Typography>
      <Divider />
      {/* <Article /> */}
    
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};