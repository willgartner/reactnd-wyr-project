import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class VotingViewer extends Component {
  render() {
    const { answered, optionOne, optionTwo, qid } = this.props;
    return (
      <Container className="question-frame-content">
        <h5 className="my-2">Would You Rather...</h5>
        <hr />
        <p>
          {optionOne} or {optionTwo}
        </p>
        <Link to={`/questions/${qid}`}>
          <Button variant="info" className="my-3 w-50">
            {answered ? "View Results" : "Go Vote!"}
          </Button>
        </Link>
      </Container>
    );
  }
}

function mapStateToProps({ authUser, questions, users }, ownProps) {
  const qid = ownProps.qid;
  return {
    optionOne: questions[qid].optionOne.text,
    optionTwo: questions[qid].optionTwo.text,
    answered: qid in users[authUser].answers ? true : false,
  };
}

export default connect(mapStateToProps)(VotingViewer);
