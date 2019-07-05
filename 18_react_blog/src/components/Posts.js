import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Moment = require("moment");
// import firebase from 'firebase'

class Posts extends React.Component {
  state = {
    searchTem: "",
    visiblePosts: this.props.posts
  };
  handleOnChange = e => {
    let newPosts = this.props.posts.filter(post =>
      post.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    this.setState({
      searchTem: e.target.value,
      visiblePosts: newPosts
    });
  };
  handleSortByDate = e => {
    let newPosts = this.props.posts;
    newPosts.sort(function compare(a, b) {
      var dateA = new Moment(a.createdAt);
      var dateB = new Moment(b.createdAt);
      return dateA - dateB;
    });

    this.setState({
      visiblePosts: newPosts
    });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleOnChange} />
        <button onClick={this.handleSortByDate}>Sort By Date</button>
        <div className="posts-list">
          {this.state.visiblePosts.map(post => {
            let date;
            if (typeof post.createdAt !== "undefined") {
              date = post.createdAt.format("MM DD, YYYY");
            }
            return (
              <Link
                to={`posts/${post.url}`}
                key={post.url}
                className="post-prev"
              >
                <li>
                  <img src={post.coverImage} alt={post.title} />
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  <span className="date">Date: {date}</span>
                  <span>Likes: {post.likes}</span>
                </li>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Posts);
