import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import { BsFillAwardFill } from "react-icons/bs";

class Results extends Component {
  calculatePercent = (votes) => {
    const { total } = this.props;
    return Math.round((votes / total) * 100 * 10) / 10;
  };

  render() {
    const { id, authUser, total, options } = this.props;
    return (
      <Container className="py-2">
        <Row className="text-left">
          <h5>Results:</h5>
        </Row>
        {options.map((option, index) => {
          const { text, votes } = option;
          const pct = this.calculatePercent(votes.length);
          return (
            <Row key={`${id}${index}`}>
              <Card className="results-option-pane">
                <Card.Header
                  className={`text-left ${
                    votes.includes(authUser) ? "result-choice-header" : ""
                  }`}
                  as="h6"
                >
                  Would you rather {text}?
                </Card.Header>
                <Card.Body
                  className={votes.includes(authUser) ? "result-choice" : ""}
                >
                  <Row>
                    <ProgressBar
                      now={pct}
                      label={`${pct}%`}
                      variant="info"
                      className="results-option-bar"
                    />
                  </Row>
                  <Row>
                    <h6 className="mx-auto pt-2">
                      {votes.length} out of {total} votes
                      {votes.includes(authUser) ? (
                        <span>
                          <BsFillAwardFill className="mx-2 result-choice-icon" />
                          <span className="result-choice-text">
                            Your Choice
                          </span>
                        </span>
                      ) : null}
                    </h6>
                  </Row>
                </Card.Body>
              </Card>
            </Row>
          );
        })}
      </Container>
    );
  }
}

function mapStateToProps({ authUser, questions }, ownProps) {
  const total =
    questions[ownProps.qid].optionOne.votes.length +
    questions[ownProps.qid].optionTwo.votes.length;
  return {
    authUser,
    total,
    options: [
      questions[ownProps.qid].optionOne,
      questions[ownProps.qid].optionTwo,
    ],
  };
}

export default connect(mapStateToProps)(Results);
