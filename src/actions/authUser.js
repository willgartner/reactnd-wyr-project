export const SET_AUTH_USER = "SET_AUTH_USER";
export const CLEAR_AUTH_USER = "CLEAR_AUTH_USER";

export function setAuthUser(id) {
  return {
    type: SET_AUTH_USER,
    id,
  };
}

export function clearAuthUser() {
  return {
    type: CLEAR_AUTH_USER,
    id: null,
  };
}
