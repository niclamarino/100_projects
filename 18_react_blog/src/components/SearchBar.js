import React, { Component } from "react";
import { connect } from "react-redux";

class SearchBar extends React.Component {
  state = {
    searchTem: "",
    visiblePosts: this.props.posts
  };
  handleOnChange = e => {
    let newPosts = this.props.posts.filter(person =>
      person.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    this.setState({
      searchTem: e.target.value,
      visiblePosts: newPosts
    });
  };
  render() {
    return (
      <div>
        {this.state.visiblePosts.map(post => {
          return <h2>{post.title}</h2>;
        })}
        <input type="text" onChange={this.handleOnChange} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const getVisiblePosts = posts => {
  return posts;
  return posts.filters(post => {
    const textMatch = post.title.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  });
};

export default connect(mapStateToProps)(SearchBar);
