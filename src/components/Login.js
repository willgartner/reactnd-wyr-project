import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { setAuthUser } from "../actions/authUser";

class Login extends Component {
  state = {
    username: "",
  };

  handleUserSelect = (e) => {
    this.setState(() => ({
      username: e.target.value,
    }));
  };

  handleUserLogin = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(setAuthUser(this.state.username));
  };

  render() {
    const { options } = this.props;

    return (
      <Container>
        <Card>
          <Card.Header as="h5">Select User</Card.Header>
          <Card.Body>
            <Form>
              <Form.Row>
                <Col md={2}></Col>
                <Col md={7}>
                  <Form.Control
                    className="px-2"
                    as="select"
                    value={this.state.username}
                    name="username"
                    onChange={this.handleUserSelect}
                  >
                    <option value="" disabled>
                      Select User
                    </option>
                    {options.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={1}>
                  <Button
                    disabled={this.state.username === "" ? true : false}
                    type="submit"
                    className="mb-2 mt-md-0 mt-2"
                    onClick={this.handleUserLogin}
                  >
                    Submit
                  </Button>
                </Col>
                <Col md={2}></Col>
              </Form.Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    options: users
      ? Object.entries(users).map((user) => {
          return { id: user[1].id, name: user[1].name };
        })
      : [],
  };
}

export default connect(mapStateToProps)(Login);
