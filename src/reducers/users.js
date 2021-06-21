import {
  RECEIVE_USERS,
  ADD_USER_QUESTION,
  ADD_USER_VOTE,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.user]: {
          ...state[action.user],
          questions: state[action.user].questions.concat([action.question]),
        },
      };
    case ADD_USER_VOTE:
      return {
        ...state,
        [action.vote.authUser]: {
          ...state[action.vote.authUser],
          answers: {
            ...state[action.vote.authUser].answers,
            [action.vote.qid]: action.vote.vote,
          },
        },
      };
    default:
      return state;
  }
}
