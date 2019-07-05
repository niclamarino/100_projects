import React from "react";
import { connect } from "react-redux";
import { addPost } from "../actions/postsActions";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import { Link } from "react-router-dom";
import PostsForm from "./PostsForm";

export class AddPost extends React.Component {
  state = {
    title: "",
    body: "",
    coverImage: "https://www.gourmet-gatto.it/sites/default/files/article/mobile/come-fanno-fusa-gatti-perche-mordono-prev.jpg",
    url: "",
    createdAt: moment(),
    focused: false
  };
  handleGoBack = () => {
    this.props.history.goBack();
  };
  handleSave = post => {
    this.props.dispatch(addPost(post));
    document.getElementById("message").style.display = "block";
  };
  render() {
    return (
      <div>
        <PostsForm
          title={this.state.title}
          body={this.state.body}
          coverImage={this.state.coverImage}
          url={this.state.url}
          createdAt={this.state.createdAt}
          onSubmit={this.handleSave}
        />
        <div id="message">
          <span>Post updated succefully</span>
          <Link to={this.state.url}>See post</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.posts
  };
};

export default connect(mapStateToProps)(AddPost);
