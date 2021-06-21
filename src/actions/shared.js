import { getInitialData } from "../utils/api";
import { receiveUsers, addUserQuestion, addUserVote } from "../actions/users";
import { receiveQuestions, addQuestion, addVote } from "../actions/questions";
import { setAuthUser } from "../actions/authUser";
import { isLoading } from "../actions/loading";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(isLoading(true));
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthUser(null));
      dispatch(isLoading(false));
    });
  };
}

export function addNewQuestion(question) {
  return (dispatch) => {
    dispatch(isLoading(true));
    return saveQuestion({
      author: question.author,
      optionOneText: question.optionOneText,
      optionTwoText: question.optionTwoText,
    })
      .then((response) => dispatch(addQuestion(response)))
      .then((response) => dispatch(addUserQuestion(response)))
      .then(() => dispatch(isLoading(false)))
      .catch((error) => {
        console.warn("Error saving question: ", error);
        dispatch(isLoading(false));
        alert("There was an error saving your question. Please try it again.");
      });
  };
}

export function addUserSelection(vote) {
  return (dispatch) => {
    dispatch(isLoading(true));
    return saveQuestionAnswer({
      qid: vote.qid,
      authedUser: vote.authUser,
      answer: vote.vote,
    })
    .then(() => dispatch(addUserVote(vote)))
      .then(() => dispatch(addVote(vote)))

      .then(() => dispatch(isLoading(false)))
      .catch((error) => {
        console.warn("Error saving vote: ", error);
        dispatch(isLoading(false));
        alert("There was an error saving your vote. Please try it again.");
      });
  };
}
