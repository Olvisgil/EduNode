import axios from "axios";
import { returnErrors } from "./errorActions"
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    VERIFICATION_SUCCESS,
    VERIFICATION_FAIL,
    IS_VERIFYING
} from "./types";


// check token and load user

export const loadUser = () => (dispatch, getState) => {
    
    //user loading
    dispatch({ type: USER_LOADING});

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
   }

    axios.get("https://desolate-woodland-50855.herokuapp.com/api/auth/user", tokenConfig(getState), config)
    .then(res =>
        {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        }
        

    ).catch(err => {
        // dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        });
    });

    

};

// register user

export const register = ({ email, password }) => dispatch => {

    dispatch({ type: USER_LOADING});
    // // headers
     const config = {
         headers: {
             "Content-Type": "application/json",
             "Access-Control-Allow-Origin": "*"
         }
    }

    // request body

const body = JSON.stringify({ email, password });

    axios.post("https://desolate-woodland-50855.herokuapp.com/api/users", body, config)
    .then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL"));
        dispatch({
            type: REGISTER_FAIL
        })
    });


}


// login User

export const login = ({ email, password }) => dispatch => {

     dispatch({ type: USER_LOADING});
    // headers
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    }
    // request body

    const body = JSON.stringify({ email, password });

    axios.post("https://desolate-woodland-50855.herokuapp.com/api/auth/", body, config)
    .then(res =>
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
   
        
    )
    .then(res => {
        if (res.payload.user.isVerified === true) {
            dispatch({
                  type: VERIFICATION_SUCCESS,
                  payload: res.data
                })
  
        }
    }

    )
    .catch(err => {
          dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAIL"));
        dispatch({
            type: LOGIN_FAIL
        })
    })

}

// send E-mail confirmation code

export const confirm = (email) => () => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
   }

   const body = JSON.stringify({ email });

    axios.post("https://desolate-woodland-50855.herokuapp.com/api/confirm", body, config)
    
}

// resend code

export const resend = (email) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
   }

   const body = JSON.stringify({ email });

    axios.post("https://desolate-woodland-50855.herokuapp.com/api/resend", body, config)

}


// logout User

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}


// setup config/header and token

export const tokenConfig = getState => {

    // Get token from local storage

    const token = getState().auth.token;
    // headers

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    };

    // if token, add to header
    if (token) {
        config.headers["x-auth-token"] = token
    }

    return config
}



// verify code

export const verifyCode = ({ email, inputcode, next }) => dispatch => {

    dispatch({ type: IS_VERIFYING});
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
   }

const body = JSON.stringify({ email, inputcode });

axios.post("https://desolate-woodland-50855.herokuapp.com/api/verifyCode", body, config, next)
.then((res, err) => {
        console.log(err)
if (res.data.response === true) { 
 

dispatch({
        type: VERIFICATION_SUCCESS,
         payload: res.data })
         const config = {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
       }
         const body = JSON.stringify({ email });
         axios.put("https://desolate-woodland-50855.herokuapp.com/api/users/update", body, config)
    }
    if (res.data.response === false) { 
        alert(res.data.message)
   dispatch(
            dispatch({
                type: VERIFICATION_FAIL,
                payload: res.data
          }))

          
}

}).catch((err) => {
 
console.log("something went wrong! " + err);

})}