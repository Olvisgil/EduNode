import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import AlignItemsList from "./Posts"
import './News.css';

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/mountain-man.jpg" className="header-image" />
        <Container>
          <h2>Posts</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
            <div><AlignItemsList /></div>
              <div>post with max of 200 characters</div>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/dog-people.jpg" />
              <p>
                
                I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. Just go out and talk to a tree. Make friends with it. I guess that would be considered a UFO. A big cotton ball in the sky. Tree trunks grow however makes them happy. In nature, dead trees are just as normal as live trees.</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}