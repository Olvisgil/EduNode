import React, { Component } from 'react'
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { clearErrors } from "../../actions/errorActions";
import { resend, verifyCode } from "../../actions/authActions";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField"
import Alert from "@material-ui/lab/Alert";
import AlertTitle from '@material-ui/lab/AlertTitle';
import CircularProgress from "@material-ui/core/CircularProgress"
import { withRouter } from 'react-router'
import { Redirect, BrowserRouter } from "react-router-dom";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./style.css";
import SideBar from "../SideBar";
import Main from "./Main";
import NavBar from "../NavBar"


const validate = values => {
  const errors = {};
  const requiredFields = ["confirmationCode"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  if (values.confirmationCode && values.confirmationCode.length < 4) {
    errors.confirmationCode = "Confirmation Code must be at least 5 characters";
  }
  return errors;
};

class Dashboard extends Component {

  

  render() {
    const { isLoading, isAuthenticated, isVerified } = this.props.auth

     if (!isAuthenticated) {

       return <Redirect to="/" />

    }
    if (isAuthenticated && !isVerified) {
      //  <p class="loading">Loading...</p> <CircularProgress color="secondary" />
      return <Redirect to="/verifyemail" />
    }
   
      return (
<>
         {/* <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <SideBar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        Welcome to EduNode! Please have in mind that we are currently in beta, so your feedback will be highly appreciated.
                    </Col> 
                </Row>

            </Container> */}
            <NavBar />
            <Main />
        </>
      )


  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

Dashboard = connect(
  mapStateToProps, { verifyCode, clearErrors }
  )(Dashboard);

export default Dashboard = reduxForm({
  form: "verifyEmailForm",
  fields: ["confirmationCode"],
  validate,
  clearErrors,
  verifyCode
})(withRouter(Dashboard));
