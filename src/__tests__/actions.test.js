/* eslint-disable no-undef */
import * as types from "../store/types";
import * as actions from "../store/actions";

const {
  ON_CHANGE_DATA,
  LOGIN_REQUEST,
  SIGNUP_REQUEST,
  SEARCH_BOOK_REQUEST,
  LIST_BOOKS_REQUEST,
  BOOK_DETAIL_REQUEST,
} = types;

const {
  onChangeData,
  loginRequest,
  signupRequest,
  searchBookRequest,
  listBooksRequest,
  bookDetailRequest,
} = actions;

describe("Redux Actions", () => {
  it("Should handle the on change data", () => {
    const data = {
      name: "user1",
    };
    const expectedAction = {
      type: ON_CHANGE_DATA,
      data,
    };
    expect(onChangeData(data)).toEqual(expectedAction);
  });
  it("Should handle login request", () => {
    const loginData = {
      username: "user1",
      password: "123456",
    };
    const expectedAction = {
      type: LOGIN_REQUEST,
      data: loginData,
    };
    expect(loginRequest(loginData)).toEqual(expectedAction);
  });
  it("Should handle the sign up request", () => {
    const signupData = {
      name: "User 1",
      username: "user1",
      email: "user1@gmail.com",
      password: "123456",
    };
    const expectedAction = {
      type: SIGNUP_REQUEST,
      data: signupData,
    };
    expect(signupRequest(signupData)).toEqual(expectedAction);
  });
  it("Should handle the search book request", () => {
    const data = {
      id: 1,
    };
    const expectedAction = {
      type: SEARCH_BOOK_REQUEST,
      data,
    };
    expect(searchBookRequest(data)).toEqual(expectedAction);
  });
  it("Should handle the list books request", () => {
    const expectedAction = {
      type: LIST_BOOKS_REQUEST,
    };
    expect(listBooksRequest()).toEqual(expectedAction);
  });
  it("Should handle the book detail request", () => {
    const data = {
      id: 3,
    };
    const expectedAction = {
      type: BOOK_DETAIL_REQUEST,
      data,
    };
    expect(bookDetailRequest(data)).toEqual(expectedAction);
  });
});
