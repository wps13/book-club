/* eslint-disable max-len */
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import {
  bookDetailRequest,
  onChangeData,
  searchBookRequest,
} from "../../store/actions";

import CommentDisplay from "../../components/CommentDisplay";
import CommentCreate from "../../components/CommentCreate";
import BookInfo from "../../components/BookInfo";
import StatusInfo from "../../components/StatusInfo";
import Header from "../../components/Header";

import "./style.scss";

const imgUser = "../../public/images/black-bg.png";

const userComments = [
  {
    username: "User 1",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in enim justo. Nunc in ante non leo ullamcorper condimentum. In turpis eros, ullamcorper vel rutrum vel, porta sit amet orci. In hac habitasse platea dictumst. ",
    userImage: imgUser,
    bookStatus: "Read It",
  },
  {
    username: "User 2",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in enim justo. Nunc in ante non leo ullamcorper condimentum. In turpis eros, ullamcorper vel rutrum vel, porta sit amet orci. In hac habitasse platea dictumst. ",
    userImage: imgUser,
    bookStatus: "Do not want to read it",
  },
];

const bookData = {
  title: "Book 1",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in enim justo. Nunc in ante non leo ullamcorper condimentum. In turpis eros, ullamcorper vel rutrum vel, porta sit amet orci. In hac habitasse platea dictumst. ",
  img: imgUser,
};

class BookPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFormComment: false,
    };
  }

  componentDidMount() {
    const { bookDetails } = this.props;
    bookDetails();
  }

  handleState = (field, value) => this.setState({ [field]: value });

  search = () => {
    const { searchBook, bookToSearch } = this.props;
    searchBook({ bookToSearch });
  };

  render() {
    const { showFormComment } = this.state;
    const { onChange } = this.props;
    return (
      <Fragment>
        <Header onChangeText={onChange} onRequest={this.search} />
        <div className="book-page-content">
          <div className="book-info-status">
            <BookInfo
              title={bookData.title}
              description={bookData.description}
              image={bookData.img}
            />
            <StatusInfo usersReadIt={5} usersWant={2} usersDontWant={0} />
          </div>

          {showFormComment ? (
            <CommentCreate changeState={onChange} />
          ) : (
            <div id="div-button-comment">
              <button
                type="button"
                id="btn-form-comment"
                onClick={() => this.handleState("showFormComment", true)}
              >
                Comment about this Book
              </button>
            </div>
          )}

          {userComments.map(comment => (
            <CommentDisplay
              key={comment.username}
              username={comment.username}
              commentText={comment.message}
              imageLink={comment.userImage}
              status={comment.bookStatus}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  onChange: data => dispatch(onChangeData(data)),
  searchBook: data => dispatch(searchBookRequest(data)),
  bookDetails: data => dispatch(bookDetailRequest(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookPage);
