import React from "react";
import { connect } from "react-redux";
import { deletePost, addLike } from "../actions/postsActions";
import { Link } from "react-router-dom";

class Post extends React.Component {
  state = {
    likes: this.props.post.likes
  };
  handleDelete = () => {
    this.props.deletePost(this.props.post.url);
    this.props.history.push("/");
  };
  handleLike = () => {
    this.setState(prevState => {
      return {
        likes: prevState.likes + 1
      };
    });
    this.props.addLike(this.props.post.url, this.state.likes);
  };
  render() {
    const post = this.props.post;
    return (
      <div>
        <img src={post.coverImage} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <span>Date: {post.createdAt.format("MM DD, YYYY")}</span>

        <button onClick={this.handleLike}>
          Likes: {this.props.post.likes}
        </button>
        <Link to={`/edit/${post.url}`}>Edit post</Link>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let url = ownProps.match.params.post_url;
  return {
    post: state.posts.find(post => post.url == url)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: url => {
      dispatch(deletePost(url));
    },
    addLike: (url, likes) => {
      dispatch(addLike(url, likes));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
