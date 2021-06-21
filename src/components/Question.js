import React, { Component } from "react";
import { connect } from "react-redux";
import NotFound from "./NotFound";
import UserDataFrame from "./UserDataFrame";
import Results from "./Results";
import Vote from "./Vote";

class Question extends Component {
  render() {
    const qid = "6ni6ok3ym7mf1p33lnez";
    const { author, unanswered, invalidQuestion } = this.props;
    if (invalidQuestion) {
      return <NotFound />;
    } else {
      return (
        <UserDataFrame id={author} text={unanswered ? "asks:" : "asked:"}>
          {unanswered ? <Vote qid={qid} /> : <Results qid={qid} />}
        </UserDataFrame>
      );
    }
  }
}

function mapStateToProps({ authUser, users, questions }, ownProps) {
  const qid = ownProps.match ? ownProps.match.params.qid : null;
  const invalidQuestion = !(qid in questions) || !qid ? true : false;
  return {
    unanswered: !(qid in users[authUser].answers) ? true : false,
    author: questions[qid].author,
    invalidQuestion,
  };
}

export default connect(mapStateToProps)(Question);
