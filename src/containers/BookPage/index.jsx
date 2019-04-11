/* eslint-disable max-len */
import React, { Component } from "react";

import CommentDisplay from "../../components/CommentDisplay";
import CommentCreate from "../../components/CommentCreate";

import "./style.scss";
import BookInfo from "../../components/BookInfo";
import StatusInfo from "../../components/StatusInfo";

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

export default class BookPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFormComment: false,
    };
  }

  handleState = (field, value) => this.setState({ [field]: value });

  render() {
    const { showFormComment } = this.state;
    return (
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
          <CommentCreate changeState={this.handleState} />
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
    );
  }
}
