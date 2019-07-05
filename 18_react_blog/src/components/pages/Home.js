import React from 'react'
import Posts from '../Posts'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Welcome to my blog</h1>
      <Link to="/categories">Categories</Link>
      <Link to="addPost">Add Post</Link>
      <Posts />
    </div>
  )
}

export default Home
