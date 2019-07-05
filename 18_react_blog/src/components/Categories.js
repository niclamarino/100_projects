import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import SingleCategory from './SingleCategory'

class Categories extends Component {
  render() {
    let posts = this.props.posts
    posts = posts.filter(
      (post, index, self) =>
        index === self.findIndex(p => p.category === post.category)
    )
    return (
      <div>
        <h1>Categories 1</h1>
        <Route path="/category/:category" component={SingleCategory} />
        {posts.map(post => (
          <Link to={`/category/${post.category}`}>{post.category}</Link>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(Categories)
