import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SingleCategory extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post => {
          return (
            <Link to={`/${post.url}`} key={post.url}>
              <li>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            </Link>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let singleCategory = ownProps.match.params.category;
  const category = state.posts.filter(post => post.category == singleCategory);
  return {
    posts: category
  };
};

export default connect(mapStateToProps)(SingleCategory);
