import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './style.css';
import { Link } from "react-router-dom"

const Side = props => {


    return (
        <>
            <Nav className="col-md-12 d-none d-md-block bg-light border border-white sidebar"
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
   
            <Link to="/dashboard/profile">Profile</Link>
      
            </Nav.Item>
            <Nav.Item>
            <Link to="/dashboard/settings">Settings</Link>
            </Nav.Item>
            {/* <Nav.Item>
                <Nav.Link eventKey="Co">My Courses</Nav.Link>
            </Nav.Item> */}
            {/* <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item> */}
            </Nav>

        </>
        );
  };
  const SideBar = withRouter(Side);
  export default SideBar