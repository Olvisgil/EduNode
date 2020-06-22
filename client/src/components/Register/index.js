import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button"
import CircularProgress from "@material-ui/core/CircularProgress"
import { clearErrors } from "../../actions/errorActions";
import { register, confirm } from "../../actions/authActions";
import "./style.css";
import { connect } from 'react-redux'
import {
  Redirect
} from "react-router-dom";

const validate = values => {
  const errors = {}
  const requiredFields = [
    'email',
    "password",
    "confirmPassword"
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  if (values.password && values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  }
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords must match'
  }
  return errors
}

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      isLoading: false,
      errors: {}
    }
    // this.handleEmailChange = this.handleEmailChange.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    isLoading: PropTypes.bool,
    register: PropTypes.func.isRequired,
    confirm: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired

  }



  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

  }

  renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
      <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
      />
    )

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = values => {
    // e.preventDefault()

    this.setState({ errors: {}, isLoading: true })

    const email = values.email
    const password = values.password

    // create user object
    const newUser = {
      email,
      password
    };

     // attempt to register

    this.props.register(newUser);

    setTimeout(() => {
      console.log("email sent");
      this.props.confirm(email)
      console.log(email)
    }, 3000)
    this.setState({ isLoading: false })
  



  }
  

  render() {
    const { pristine, submitting } = this.props
    const { isLoading, isAuthenticated, isVerified } = this.props.auth
    if (isLoading) {
      //  <p class="loading">Loading...</p> <CircularProgress color="secondary" />
      return <div style={{
        position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
    }}> <CircularProgress 
        color="secondary"
        />
          </div>
    }
    if (isAuthenticated && !isVerified) {
      //  <p class="loading">Lding...</p> <CircularProgress color="secondary" />
      return <Redirect to="/verifyemail" />
      
    }
    if (isAuthenticated && isVerified) {
      //  <p class="loading">Lding...</p> <CircularProgress color="secondary" />
      return <Redirect to="/dashboard" />
    }
    return (
      <form id="form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
       <h3>Please Sign Up</h3> 
        <div>
          <Field
            name="email"
            type="text"
            label="Email"
            component={this.renderTextField}
            id="email"
            value={this.state.email}
          />
        </div>
        <div>
          <Field
            name="password"
            type="password"
            label="Password"
            component={this.renderTextField}
            id="password"
            value={this.state.password}
          />
        </div>
        <div>
          <Field
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            component={this.renderTextField}
            id="confirmPassword"
            value={this.state.confirmPassword}
          />
        </div>
        <div>
          <Button
            variant="contained"
            id="button"
            type="submit"
            disabled={pristine || submitting}>
            Register
        </Button>
        </div>
        <div>
        <p>{this.props.error.msg.msg}</p>
        </div>
        <div>
          {/* <Link to="/">
            Return
     </Link> */}
        </div>
      </form>

    )
  }
}

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    auth: state.auth
  })

Register = connect(
  mapStateToProps, { register, confirm, clearErrors }
)(Register)

export default Register = reduxForm({
  form: "RegisterReduxForm",
  fields: ['email', 'password'],
  register,
  confirm,
  validate,
  clearErrors
})(Register)


