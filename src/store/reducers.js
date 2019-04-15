import * as types from "./types";

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

const reducers = (state = {}, { type, data }) => {
  switch (type) {
    case ON_CHANGE_DATA:
      return {
        ...state,
        ...data,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoadingLogin: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoadingLogin: false,
        ...data,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoadingLogin: false,
        ...data,
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoadingSignup: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoadingSignup: false,
        ...data,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoadingSignup: false,
        ...data,
      };
    case SEARCH_BOOK_REQUEST:
      return {
        ...state,
        isLoadingSearch: true,
      };
    case SEARCH_BOOK_SUCCESS:
      return {
        ...state,
        isLoadingSearch: false,
        ...data,
      };
    case SEARCH_BOOK_FAILURE:
      return {
        ...state,
        isLoadingSearch: false,
        ...data,
      };
    case LIST_BOOKS_REQUEST:
      return {
        ...state,
        isLoadingList: true,
      };
    case LIST_BOOKS_SUCCESS:
      return {
        ...state,
        isLoadingList: false,
        ...data,
      };
    case LIST_BOOKS_FAILURE:
      return {
        ...state,
        isLoadingList: false,
        ...data,
      };
    case BOOK_DETAIL_REQUEST:
      return {
        ...state,
        isLoadingBookDetail: true,
      };
    case BOOK_DETAIL_SUCCESS:
      return {
        ...state,
        isLoadingBookDetail: false,
        ...data,
      };
    case BOOK_DETAIL_FAILURE:
      return {
        ...state,
        isLoadingBookDetail: false,
        ...data,
      };
    default:
      return state;
  }
};

export default reducers;
