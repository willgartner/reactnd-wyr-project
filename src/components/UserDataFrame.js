import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class UserDataFrame extends Component {
  render() {
    const { text, id, users } = this.props;
    return (
      <Container>
        <Card>
          <Card.Header as="h5" className="text-left">{`${
            users[id] ? users[id].name : ""
          }${text ? ` ${text}` : ""}`}</Card.Header>
          <Card.Body className="user-frame">
            <Row>
              <Col xs="4" className="my-auto">
                <Image
                  variant="top"
                  src={users[id] ? users[id].avatarURL : null}
                  roundedCircle
                  className="user-frame-img"
                />
              </Col>
              <Col xs="8" className="user-frame-content">
                <div>{this.props.children}</div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(UserDataFrame);
