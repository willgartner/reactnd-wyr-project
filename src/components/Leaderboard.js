import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import UserDataFrame from "./UserDataFrame";
import Score from "./Score";

class Leaderboard extends Component {
  render() {
    const { users } = this.props;
    return (
      <Fragment>
        <h1>Leaderboard:</h1>
        {users.map((user, index) => {
          return (
            <UserDataFrame key={user.id} id={user.id}>
              <Score user={user.id} place={index + 1} />
            </UserDataFrame>
          );
        })}
      </Fragment>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
      .map((user) => {
        const total = Object.keys(user.answers).length + user.questions.length;
        return { id: user.id, score: total };
      })
      .sort((a, b) => b.score - a.score),
  };
}

export default connect(mapStateToProps)(Leaderboard);
