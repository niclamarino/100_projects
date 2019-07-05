import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Post from "./Post";
import Edit from "./Edit";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import SingleCategory from "./SingleCategory";
import AddPost from "./AddPost";
import Breadcrumbs from "./Breadcrumbs";

const Header = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Breadcrumbs />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/addPost" component={AddPost} />
        <Route path="/category/:category" component={SingleCategory} />

        <Route path="/about" component={About} />
        <Route exact path="/edit/:post_url" component={Edit} />

        <Route path="/posts/:post_url" component={Post} />
        <Route path="/categories" component={Categories} />
      </Switch>
    </BrowserRouter>
  );
};

export default Header;
