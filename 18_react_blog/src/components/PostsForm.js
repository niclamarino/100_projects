import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
// import "react-dates/lib/css/_datepicker.css";

export class PostsForm extends React.Component {
  state = {
    title: this.props.title ? this.props.title : "",
    body: this.props.body ? this.props.body : "",
    coverImage: this.props.coverImage,
    url: this.props.title,
    createdAt: this.props.createdAt ? this.props.createdAt : moment(),
    focused: false
  };
  handleGoBack = () => {
    this.props.history.goBack();
  };
  handleChangeTitle = e => {
    const title = e.target.value;
    this.setState(() => ({ title, url: encodeURI(title) }));
  };
  handleChangeCoverImage = e => {
    const coverImage = e.target.value;
    this.setState(() => ({ coverImage }));
  };
  handleChangeBody = e => {
    const body = e.target.value;
    this.setState(() => ({ body }));
  };
  onDateChange = createdAt => {
    this.setState(() => ({ createdAt }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      title: this.state.title,
      body: this.state.body,
      coverImage: this.state.coverImage,
      url: this.props.url,
      createdAt: this.state.createdAt
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChangeTitle}
        />
        <input type="file" name="file" onChange={this.handleChangeCoverImage} />
        <textarea
          name="body"
          value={this.state.body}
          onChange={this.handleChangeBody}
          cols="30"
          rows="10"
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.focused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <button>Salva</button>
      </form>
    );
  }
}

export default PostsForm;
