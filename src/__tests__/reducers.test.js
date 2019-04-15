/* eslint-disable no-undef */
import * as types from "../store/types";

import reducers from "../store/reducers";

const {
  ON_CHANGE_DATA,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SEARCH_BOOK_REQUEST,
  SEARCH_BOOK_SUCCESS,
  SEARCH_BOOK_FAILURE,
  LIST_BOOKS_REQUEST,
  LIST_BOOKS_SUCCESS,
  LIST_BOOKS_FAILURE,
  BOOK_DETAIL_REQUEST,
  BOOK_DETAIL_SUCCESS,
  BOOK_DETAIL_FAILURE,
} = types;

describe("reducers tests", () => {
  it("Should return the inicial state if action is unknown", () => {
    const action = {
      type: " UNKNOWN",
    };
    expect(reducers({}, action)).toEqual({});
  });
  it("Should handle ON_CHANGE_DATA", () => {
    const state = {};
    const data = { name: "user 1" };
    const action = {
      type: ON_CHANGE_DATA,
      data,
    };
    const expectedState = {
      name: "user 1",
    };
    expect(reducers(state, action)).toEqual(expectedState);
  });
  it("Shoud handle LOGIN_REQUEST", () => {
    const state = {};
    const action = {
      type: LOGIN_REQUEST,
    };
    const expectedState = {
      isLoadingLogin: true,
    };
    expect(reducers(state, action)).toEqual(expectedState);
  });
  it("Should handle LOGIN_SUCCESS", () => {
    const state = {
      isLoadingLogin: true,
    };
    const action = {
      type: LOGIN_SUCCESS,
      data: {
        message: "logged successfully",
      },
    };
    const expectedState = {
      isLoadingLogin: false,
      message: "logged successfully",
    };
    expect(reducers(state, action)).toEqual(expectedState);
  });
  it("Should handle LOGIN_FAILURE", () => {
    const state = {
      isLoadingLogin: true,
    };
    const action = {
      type: LOGIN_FAILURE,
      data: {
        message: "could not log in",
      },
    };
    const expectedState = {
      isLoadingLogin: false,
      message: "could not log in",
    };
    expect(reducers(state, action)).toEqual(expectedState);
  });
  it("Should handle SIGNUP_REQUEST", () => {
    const state = {};
    const action = {
      type: SIGNUP_REQUEST,
      data: {
        username: "user1",
      },
    };
    const expectedState = {
      isLoadingSignup: true,
    };
    expect(reducers(state, action)).toEqual(expectedState);
  });
  it("Should handle SIGNUP_SUCCESS", () => {
    const state = {
      isLoadingSignup: true,
    };
    const action = {
      type: SIGNUP_SUCCESS,
      data: {
        message: "user registered",
      },
    };
    const expectedState = {
      isLoadingSignup: false,
      message: "user registered",
    };
    expect(reducers(state, action)).toEqual(expectedState);
  });
  it("Should handle SIGNUP_FAILURE", () => {
    const state = {
      isLoadingSignup: true,
    };
    const action = {
      type: SIGNUP_FAILURE,
      data: {
        message: "could not register user",
      },
    };
    const expectedState = {
      isLoadingSignup: false,
      message: "could not register user",
    };
    expect(reducers(state, action)).toEqual(expectedState);
  });
  it("Shoud handle SEARCH_BOOK_REQUEST", () => {
    const state = {
      isLoadingSignup: false,
    };
    const action = {
      type: SEARCH_BOOK_REQUEST,
    };
    const expectedState = {
      isLoadingSignup: false,
      isLoadingSearch: true,
    };
    expect(reducers(state, action)).toEqual(expectedState);
  });
  it("Shoud handle SEARCH_BOOK_SUCCESS", () => {
    const state = {
      isLoadingSignup: false,
    };
    const action = {
      type: SEARCH_BOOK_SUCCESS,
      data: {
        result: {
          name: "book 1",
          description: "book 1 description",
        },
      },
    };
    const expectedState = {
      isLoadingSignup: false,
      isLoadingSearch: false,
      result: {
        name: "book 1",
        description: "book 1 description",
      },
    };
    expect(reducers(state, action)).toEqual(expectedState);
  });
  it("Shoud handle SEARCH_BOOK_FAILURE", () => {
    const state = {
      isLoadingSignup: false,
    };
    const action = {
      type: SEARCH_BOOK_FAILURE,
      data: {
        message: "Could not retrieve the results",
      },
    };
    const expectedState = {
      isLoadingSignup: false,
      isLoadingSearch: false,
      message: "Could not retrieve the results",
    };
    expect(reducers(state, action)).toEqual(expectedState);
  });
  it("Should handle LIST_BOOKS_REQUEST", () => {
    const state = {
      isLoadingSignup: false,
      isLoadingSearch: false,
      message: "Could not retrieve the results",
    };
    const action = {
      type: LIST_BOOKS_REQUEST,
    };
    const expectedState = {
      isLoadingSignup: false,
      isLoadingSearch: false,
      message: "Could not retrieve the results",
      isLoadingList: true,
    };
    expect(reducers(state, action)).toEqual(expectedState);
  });
  it("Should handle LIST_BOOKS_SUCCESS", () => {
    const state = {
      isLoadingSignup: false,
      isLoadingSearch: false,
      message: "Could not retrieve the results",
    };
    const action = {
      type: LIST_BOOKS_SUCCESS,
      data: {
        books: [
          {
            name: "book 1",
            description: "book 1 desc",
          },
          {
            name: "book 2",
            description: "book 2 desc",
          },
        ],
      },
    };
    const expectedState = {
      isLoadingSignup: false,
      isLoadingSearch: false,
      message: "Could not retrieve the results",
      isLoadingList: false,
      books: [
        {
          name: "book 1",
          description: "book 1 desc",
        },
        {
          name: "book 2",
          description: "book 2 desc",
        },
      ],
    };
    expect(reducers(state, action)).toEqual(expectedState);
  });
  it("Should handle LIST_BOOKS_FAILURE", () => {
    const state = {
      isLoadingSignup: false,
      isLoadingSearch: false,
      message: "Could not retrieve the results",
    };
    const action = {
      type: LIST_BOOKS_FAILURE,
      data: {
        message: "Could not retrieve the books",
      },
    };
    const expectedState = {
      isLoadingSignup: false,
      isLoadingSearch: false,
      message: "Could not retrieve the books",
      isLoadingList: false,
    };
    expect(reducers(state, action)).toEqual(expectedState);
  });
  it("Should handle BOOK_DETAIL_REQUEST", () => {
    const state = {
      isLoadingLogin: false,
    };
    const action = {
      type: BOOK_DETAIL_REQUEST,
    };
    const expectedState = {
      isLoadingLogin: false,
      isLoadingBookDetail: true,
    };
    expect(reducers(state, action)).toEqual(expectedState);
  });
  it("Should handle BOOK_DETAIL_SUCCESS", () => {
    const state = {
      isLoadingLogin: false,
    };
    const action = {
      type: BOOK_DETAIL_SUCCESS,
      data: {
        book: {
          name: "book 1",
          description: "book 1 desc",
        },
      },
    };
    const expectedState = {
      isLoadingLogin: false,
      isLoadingBookDetail: false,
      book: {
        name: "book 1",
        description: "book 1 desc",
      },
    };
    expect(reducers(state, action)).toEqual(expectedState);
  });
  it("Should handle BOOK_DETAIL_FAILURE", () => {
    const state = {
      isLoadingLogin: false,
    };
    const action = {
      type: BOOK_DETAIL_FAILURE,
      data: {
        message: "Could not retrive book details",
      },
    };
    const expectedState = {
      isLoadingLogin: false,
      isLoadingBookDetail: false,
      message: "Could not retrive book details",
    };
    expect(reducers(state, action)).toEqual(expectedState);
  });
});
