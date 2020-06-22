import React, { Component } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Loggedout from "./components/Loggedout";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { store } from "./store";
import "./App.css";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import { Redirect } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/aboutus";
import ContactUs from "./components/contactus";
import Resources from "./components/resources";
import Community from "./components/Community";
import NavBar from "./components/NavBar";
import CommentBox from "./components/CommentBox"
import Chat from "./components/Chat";
import Blog from "./components/Blog";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import NewPost from "./components/NewPost";
import verifyEmail from "./components/VerifyEmail";
import Article from "./components/Blog/Article";

class App extends Component {
  render() {
    const history = syncHistoryWithStore(browserHistory, store);
    return (
      
      <>
      <Provider store={store}>

          <Router history={history}>
             <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/community" component={Community} />
              <Route path="/contactus" component={ContactUs} />
              <Route path="/resources" component={Resources} />
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/register" component={Register} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/dashboard/profile" component={Profile} />
              <Route path="/dashboard/settings" component={Settings} />
              <Route path="/dashboard/newpost" component={NewPost} />
              <Route path="/chat" component={Chat} />
              <Route path="/login" component={Login} history={history} />
              <Route path="/feed" component={Feed} />
              <Route path="/loggedout" component={Loggedout} />
              <Route path="/profile" component={Profile} />
              <Route path="/blog" exact component={Blog} />
              <Route path="/blog/:title"  component={Article} />
              <Route path="/comments" component={CommentBox} />
              <Route path="/verifyemail" component={verifyEmail} />
             <Redirect from='*' to='/'/>
            </Switch>
          </Router>
  
      </Provider>
    </>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps)(App));