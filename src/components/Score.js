import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Score extends Component {
  setScoreColor = (place) => {
    switch (place) {
      case 1:
        return "#c7a900";
      case 2:
        return "#afafaf";
      case 3:
        return "#ad5b18";
      default:
        return "#008585";
    }
  };

  render() {
    const { asked, answered, total, place } = this.props;
    const bgColor = this.setScoreColor(place);
    return (
      <Container className="text-left">
        <Row className="py-4 my-3" height="100%">
          <Col xs="8" className="py-2">
            <p>
              Questions Asked:{" "}
              <span className="score-asked-answered">{asked}</span>
            </p>
            <p>
              Questions Answered:{" "}
              <span className="score-asked-answered">{answered}</span>
            </p>
          </Col>
          <Col xs="4" className="text-center score-box">
            <h6>Score</h6>
            <h3
              className="score-total-text"
              style={{ backgroundColor: bgColor }}
            >
              {total}
            </h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps({ users }, ownProps) {
  const user = ownProps.user;
  const asked = users[user].questions.length;
  const answered = Object.keys(users[user].answers).length;
  const total = asked + answered;
  return {
    asked,
    answered,
    total,
  };
}

export default connect(mapStateToProps)(Score);
