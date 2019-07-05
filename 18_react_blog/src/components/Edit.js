import React from "react";
import { connect } from "react-redux";
import { editPost } from "../actions/postsActions";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import PostsForm from "./PostsForm";

export class Edit extends React.Component {
  state = {
    title: this.props.post.title,
    body: this.props.post.body,
    coverImage: this.props.post.coverImage,
    url: this.props.post.url,
    createdAt: moment(),
    focused: false
  };
  handleSave = post => {
    this.props.dispatch(editPost(post));
    document.getElementById("message").style.display = "block";
    console.log(this.props.post);
  };
  handleGoBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <PostsForm
          title={this.props.post.title}
          body={this.props.post.body}
          coverImage={this.props.post.coverImage}
          url={this.props.post.url}
          createdAt={this.props.post.createdAt}
          onSubmit={this.handleSave}
        />
        <div id="message">
          <span>Post updated succefully</span>
          <button onClick={this.handleGoBack}>Go back</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find(post => post.url === props.match.params.post_url)
  };
};

export default connect(mapStateToProps)(Edit);
