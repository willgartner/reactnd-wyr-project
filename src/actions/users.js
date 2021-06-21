export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
export const ADD_USER_VOTE = "ADD_USER_VOTE";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addUserQuestion(question) {
  return {
    type: ADD_USER_QUESTION,
    user: question.question.author,
    question: question.question.id,
  };
}

export function addUserVote(vote) {
  return {
    type: ADD_USER_VOTE,
    vote
  };
}
