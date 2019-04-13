import * as types from "./types";

const {
  ON_CHANGE_DATA,
  LOGIN_REQUEST,
  SIGNUP_REQUEST,
  SEARCH_BOOK_REQUEST,
  LIST_BOOKS_REQUEST,
  BOOK_DETAIL_REQUEST,
} = types;

export const onChangeData = data => ({
  type: ON_CHANGE_DATA,
  data,
});

export const loginRequest = data => ({
  type: LOGIN_REQUEST,
  data,
});

export const signupRequest = data => ({
  type: SIGNUP_REQUEST,
  data,
});

export const searchBookRequest = data => ({
  type: SEARCH_BOOK_REQUEST,
  data,
});

export const listBooksRequest = () => ({
  type: LIST_BOOKS_REQUEST,
});

export const bookDetailRequest = data => ({
  type: BOOK_DETAIL_REQUEST,
  data,
});
