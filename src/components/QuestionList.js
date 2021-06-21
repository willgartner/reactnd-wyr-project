import React, { Component } from "react";
import { connect } from "react-redux";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import UserDataFrame from "./UserDataFrame";
import VotingViewer from "./VotingViewer";

class QuestionList extends Component {
  state = {
    key: "unanswered",
  };

  handleTabChange = (tab) => {
    const key = tab;
    this.setState(() => ({
      key,
    }));
  };

  render() {
    const { answered, unanswered, questions } = this.props;
    const { key } = this.state;
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => this.handleTabChange(k)}
        className="mb-3"
      >
        <Tab eventKey="unanswered" title="Unanswered">
          {unanswered.map((qid) => {
            const author = questions[qid].author;
            return (
              <UserDataFrame key={`ua${qid}`} id={author} text="asks:">
                <VotingViewer qid={qid} />
              </UserDataFrame>
            );
          })}
        </Tab>
        <Tab eventKey="answered" title="Answered">
          {answered.map((qid) => {
            const author = questions[qid].author;
            return (
              <UserDataFrame key={`ad${qid}`} id={author} text="asked:">
                <VotingViewer qid={qid} />
              </UserDataFrame>
            );
          })}
        </Tab>
      </Tabs>
    );
  }
}

function mapStateToProps({ authUser, questions, users }) {
  const userAnswers = Object.keys(users[authUser].answers);
  const qids = Object.values(questions)
    .sort((a, b) => b.timestamp - a.timestamp)
    .map((question) => question.id);
  return {
    authUser,
    answered: qids.filter((qid) => userAnswers.includes(qid)),
    unanswered: qids.filter((qid) => !userAnswers.includes(qid)),
    questions,
  };
}

export default connect(mapStateToProps)(QuestionList);
