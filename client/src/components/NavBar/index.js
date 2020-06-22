import React, { Component, Fragment } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Logout from "../auth/Logout";
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import SideBar from "../../components/SideBar";
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router'
import favicon from "./favicon.png"
import Dashboard from "../Dashboard"
import "./style.css"

class NavBar extends Component {
  constructor(){
    super()
    this.state = {
      isOpen: false
    }
  }
  

  static propTypes = {
    auth: PropTypes.object.isRequired
  }


  render() {

    const {  isAuthenticated } = this.props.auth;
if (isAuthenticated) {
  return (
    <>
    
    <Grid className="border border-white">
    <Navbar  bg="light" expand="lg">
<Navbar.Brand href="/"><img src={favicon} alt={"logo"}/></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">  
  <Nav.Link href="/resources">Resources</Nav.Link>
      <Nav.Link href="/community">Community</Nav.Link>
      <Nav.Link href="/feed">Feed</Nav.Link> 
      <Nav.Link href="/blog">Blog</Nav.Link>
    
  </Nav>
  <Button href="/dashboard/newpost" variant="contained">New Post</Button>
  <Nav>
  <NavDropdown title={this.props.auth.user.email} id="basic-nav-dropdown">

        
        {/* <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item> */}
        <NavDropdown.Divider />
        <NavDropdown.Item><Logout /></NavDropdown.Item>
      </NavDropdown>

      </Nav>

</Navbar.Collapse>
</Navbar>
    <Navbar bg="light" expand="lg">

    
    </Navbar>
    
        </Grid>
</>

  );
  
}

    return (
      <>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/"><img src={favicon} alt={"logo"}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="/resources">Resources</Nav.Link>
      <Nav.Link href="/community">Community</Nav.Link>
      {/* <Nav.Link href="/feed">Feed</Nav.Link> */}
      <Nav.Link href="/blog">Blog</Nav.Link>
      
    </Nav>
  
    <Nav>
     <Nav.Link href="/login">Log In</Nav.Link>
      <Nav.Link href="/register">Sign Up</Nav.Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>
      <Navbar bg="light" expand="lg">
      {/* <Navbar.Brand href="/"><img className="logo" src={logo} alt="logo" /></Navbar.Brand> */}
      
      </Navbar>

 </>

    );
  };


};

const mapStateToProps = state => ({
  auth: state.auth
})


export default withRouter(connect(mapStateToProps, null)(NavBar))