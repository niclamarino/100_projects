import React from 'react';
import './App.css'

export default class App extends React.Component {
  state = {
    value: '',
    emails: ["niclamarino@ma.it"],
    error: null
  }
  handleChange = (e) => {
    this.setState({value: e.target.value});
  }
  handleDelete = (toBeRemoved) => {
    this.setState({
      emails: this.state.emails.filter(email => email !== toBeRemoved)
    });
  };
  isValid(email) {
    var error = null;

    if (!this.isEmail(email)) {
      error = `${email} is not a valid email address.`;
    }

    if (this.isInList(email)) {
      error = `${email} has already been added.`;
    }

    if (error) {
      this.setState({ error });

      return false;
    }

    return true;
  }
  isValid(email) {
    var error = null;

    if (!this.isEmail(email)) {
      error = `${email} is not a valid email address.`;
    }

    if (this.isInList(email)) {
      error = `${email} has already been added.`;
    }

    if (error) {
      this.setState({ error });

      return false;
    }

    return true;
  }
  isEmail(email) {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  }
  isInList(email) {
    return this.state.emails.includes(email);
  }
  handlePaste = (evt) => {
    evt.preventDefault();

    var paste = evt.clipboardData.getData('text');
    var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    if (emails) {
      var toBeAdded = emails.filter(email => !this.isInList(email));

      this.setState({
        emails: [...this.state.emails, ...toBeAdded]
      });
    }
  };
  addEmail = (evt, inputValue) => {

    if (['Enter', 'Tab', ','].includes(evt.key) || evt.type === "click") {
      evt.preventDefault();

      var email = this.state.value.trim();
      if (email && this.isValid(email)) {
        this.setState({
          emails: [...this.state.emails, email],
          value: ''
        });
      }
    }    
  }
  handleKeyDown = (evt) => {
    this.addEmail(evt);
  };
  handleClick = (evt, inputValue) => {
    inputValue = document.querySelector("input").value;
    if(evt !== "") {
      this.addEmail(evt, inputValue);
    }
    
  }
  handleEditChip = (e) => {
    console.log(e.target.id);
    e.target.innerHTML = `<input type="text">`
  }
  render() {
    return (
      <main className="wrapper">
      {this.state.emails.map(email => (
        <div className="email-chip" key={email} id={email} onClick={this.handleEditChip}>
        {email}
        
        <button
        type="button"
        className="button"
        onClick={() =>  this.handleDelete(email)}
        >
        &times;
        </button>
        </div>
        ))}

      <input
      className={'input' + (this.state.error && ' has-error')}
      placeholder="Type or paste email addresses and press `Enter`"
      value={this.state.value}
      onChange={this.handleChange}
      onKeyDown={this.handleKeyDown}
      onPaste={this.handlePaste}
      />

      {this.state.error &&
        <p className="error">{this.state.error}</p>}

      <button onClick={this.handleClick}>Add</button>
        </main>
    );
  }

}