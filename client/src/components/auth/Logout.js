import React, { Component } from 'react';
import { connect } from "react-redux";
import { logout } from '../../actions/authActions';
import PropTypes from "prop-types";
import { clearErrors } from "../../actions/errorActions";
import {
    Button,
    Form
} from "reactstrap";
import { withRouter } from "react-router-dom";

class LogoutModal extends Component {

    static propTypes = {
        logout: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    // componentDidUpdate(prevProps) {
    //     const { error } = this.props;
    //     if (error !== prevProps.error) {
    //         if (error.id === "LOGIN_FAIL") {
    //             this.setState({ msg: error.msg.msg });
    //         } else {
    //             this.setState({ msg: null });
    //         }
    //     }
    // }

    onSubmit = e => {
        e.preventDefault();
        const cleanUp = () => {
            
            alert("bye")
        }
        cleanUp()
    }


    render() {



        return (

            <Form onSubmit={this.onSubmit}>
                <Button onClick={this.props.logout}>
                    Logout
                </Button>
            </Form>
           



        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default withRouter(connect(mapStateToProps,
    { clearErrors, logout })(LogoutModal))
