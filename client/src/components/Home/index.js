import React, { Component } from "react";
import "./style.css";
import Hometwo from "./Hometwo";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import NavBar from "../NavBar"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };

  }


  
  render() {
   
    const { isLoading, isAuthenticated, isVerified } = this.props.auth
    if (isAuthenticated && !isVerified) {

      return <Redirect to="/verifyemail" />
    }
    if (isVerified) {

      return <Redirect to="/dashboard" />
    }

  return (
    <>

<NavBar />
<Hometwo />
    </>
  
  )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(Home)

