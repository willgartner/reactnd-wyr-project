import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { handleInitialData } from "../actions/shared";
import Navigation from "./Navigation";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import Question from "./Question";
import QuestionList from "./QuestionList";
import NewQuestion from "./NewQuestion";

class App extends Component {
  componentDidMount() {
      this.props.dispatch(handleInitialData());
  }

  render() {
    const { authUser, loading } = this.props;

    return (
      <Router>
        <Fragment>
          <Navigation />
          <Container className="text-center my-3 py-3">
            {loading ? (
              <Spinner animation="grow" variant="info" />
            ) : authUser ? (
              <div>
                <Route path="/" exact component={QuestionList} />
                <Route path="/question/:qid" component={Question} />
                <Route path="/new" component={NewQuestion} />
                <Route path="/leaderboard" component={Leaderboard} />
              </div>
            ) : (
              <Login />
            )}
          </Container>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authUser, loading }) {
  return {
    authUser,
    loading,
  };
}

export default connect(mapStateToProps)(App);
