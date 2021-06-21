import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addUserSelection } from "../actions/shared";

class Vote extends Component {
  state = {
    myVote: "",
  };

  handleVoting = (event) => {
    const myVote = event.target.value;
    this.setState(() => ({
      myVote,
    }));
  };

  handleSubmitVote = (event) => {
    event.preventDefault();
    const { myVote } = this.state;
    const { dispatch, authUser, qid } = this.props;
    dispatch(
      addUserSelection({
        qid,
        authUser,
        vote: myVote,
      })
    );
  };

  render() {
    const { myVote } = this.state;
    const { options } = this.props;
    return (
      <Container className="question-frame-content">
        <h3 className="my-2">Would You Rather...</h3>
        <Form>
          <Form.Group>
            {options.map((option) => {
              const text = option.question.text;
              const value = option.value;
              return (
                <Form.Check
                  className="text-left p-2 mx-3"
                  type="radio"
                  label={`${text}?`}
                  name="myVote"
                  value={value}
                  id={`reply${value}`}
                  key={`reply${value}`}
                  onChange={this.handleVoting}
                />
              );
            })}
          </Form.Group>
          <Button
            onClick={this.handleSubmitVote}
            variant="info"
            type="submit"
            className="my-3 w-50"
            disabled={myVote === "" ? true : false}
          >
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

function mapStateToProps({ authUser, questions }, ownProps) {
  return {
    authUser,
    options: [
      { value: "optionOne", question: questions[ownProps.qid].optionOne },
      { value: "optionTwo", question: questions[ownProps.qid].optionTwo },
    ],
  };
}

export default connect(mapStateToProps)(Vote);
