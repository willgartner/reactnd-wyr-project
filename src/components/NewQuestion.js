import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { addNewQuestion } from "../actions/shared";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    redirect: false,
  };

  handleInputOne = (e) => {
    const optionOne = e.target.value;
    this.setState(() => ({
      optionOne,
    }));
  };

  handleInputTwo = (e) => {
    const optionTwo = e.target.value;
    this.setState(() => ({
      optionTwo,
    }));
  };

  handleQuestionSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { dispatch, authUser } = this.props;
    this.setState(
      () => ({
        redirect: true,
      }),
      () => {
        dispatch(
          addNewQuestion({
            author: authUser,
            optionOneText: optionOne,
            optionTwoText: optionTwo,
          })
        );
      }
    );
  };

  render() {
    const { optionOne, optionTwo, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <Container>
        <Card>
          <Card.Header as="h5">Create a New Question</Card.Header>
          <Card.Body>
            <Form>
              <h5>Would You Rather?</h5>
              <Form.Row>
                <InputGroup>
                  <Form.Control
                    className="px-2"
                    type="text"
                    value={optionOne}
                    name="optionOne"
                    onChange={this.handleInputOne}
                  />
                  <InputGroup.Text>?</InputGroup.Text>
                </InputGroup>
              </Form.Row>
              <p className="mt-3">--- OR ---</p>
              <Form.Row>
                <InputGroup>
                  <Form.Control
                    className="px-2"
                    type="text"
                    value={optionTwo}
                    name="optionTwo"
                    onChange={this.handleInputTwo}
                  />
                  <InputGroup.Text>?</InputGroup.Text>
                </InputGroup>
              </Form.Row>
              <Form.Row>
                <Button
                  disabled={optionOne === "" || optionTwo === "" ? true : false}
                  type="submit"
                  size="lg"
                  className="my-4 mx-auto"
                  onClick={this.handleQuestionSubmit}
                >
                  Submit
                </Button>
              </Form.Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
