import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0,
    images: [
      "https://img02.ztat.net/article/DE/12/1C/0K/1Q/11/DE121C0K1-Q11@9.jpg",
      "https://img01.ztat.net/article/DE/12/1C/0K/1Q/11/DE121C0K1-Q11@10.jpg",
      "https://img01.ztat.net/article/DE/12/1C/0K/1Q/11/DE121C0K1-Q11@6.jpg",
      "https://img01.ztat.net/article/DE/12/1C/0K/1Q/11/DE121C0K1-Q11@7.jpg"
    ]
  };
  handleOnHover = (e) => {
    const picture = document.querySelector("picture");
    const rect = document.querySelector(".img-container").getBoundingClientRect()

    const x = (e.clientX - rect.left) / 2;
    const y = (e.clientY - rect.top) / 2;

    picture.setAttribute(
       "style", `transform: scale(2) translate(-${x}px, -${y}px);`
    );
    
  };
  handleOnLeave = () => {
    document.querySelector("picture").setAttribute(
       "style", ""
    );
  };
  handleSwitchImage = (e) => {
    const img = e.target.src;
    const id = e.target.id;
    this.setState({count: parseInt(id)});
    document.querySelector(".big-img img").src = img;
    document.querySelector(".big-img img").setAttribute("id", id);
  };
  handleOpenSlider = (e) => {
    const img = e.target.src;
    const id = e.target.id;
    document.querySelector(".slider img").setAttribute("id", id);

    document.querySelector(".slider").setAttribute(
       "style", `opacity: 1; display: block`
    );
    document.querySelector(".slider img").src = img;

    this.setState({count: parseInt(e.target.id)});
  };
  handleCloseSlider = () => {
    document.querySelector(".slider").setAttribute(
       "style", `opacity: 0; display: none`
    );
  };
  handlePrevious = () => {
    if(this.state.count === 0) {
      this.setState({count: this.state.images.length - 1}, () => this.changeSlide());
    } else {
      this.setState(prevState => {
        return { count: prevState.count - 1 }
      }, () => this.changeSlide());
    };
  };
  handleNext = () => {
    if(this.state.count === this.state.images.length - 1) {
      this.setState({count: 0}, () => this.changeSlide());
    } else {
      this.setState(prevState => {
        return { count: prevState.count + 1 }
      }, () => this.changeSlide());
    };
  };
  changeSlide = () => {
    document.querySelector(".slider img").src = this.state.images[this.state.count];
  };
  render() {
    return (
     <div>
      <section className="gallery">
        <div className="miniatures" onClick={this.handleSwitchImage} onMouseMove={this.handleSwitchImage}>
          <div className="miniature">
            <img src="https://img02.ztat.net/article/DE/12/1C/0K/1Q/11/DE121C0K1-Q11@9.jpg" id="0" />
          </div>
          <div className="miniature">
            <img src="https://img02.ztat.net/article/DE/12/1C/0K/1Q/11/DE121C0K1-Q11@10.jpg" id="1" />
          </div>
          <div className="miniature">
            <img src="https://img01.ztat.net/article/DE/12/1C/0K/1Q/11/DE121C0K1-Q11@6.jpg" id="2" />
          </div>
          <div className="miniature">
            <img src="https://img01.ztat.net/article/DE/12/1C/0K/1Q/11/DE121C0K1-Q11@7.jpg" id="3" />
          </div>
        </div>
        <div className="flex big-img">
          <div className="img-container">
          <picture onMouseMove={this.handleOnHover} onMouseLeave={this.handleOnLeave}>
            <img src="https://img01.ztat.net/article/DE/12/1C/0K/1Q/11/DE121C0K1-Q11@9.jpg" id="0" onClick={this.handleOpenSlider} />
          </picture>
          </div>
        </div>
      </section>
      <section className="slider">
        <span className="close" onClick={this.handleCloseSlider}></span>
        <img src="https://img01.ztat.net/article/DE/12/1C/0K/1Q/11/DE121C0K1-Q11@9.jpg" id="3" />
        <span className="prev" onClick={this.handlePrevious}>PREV</span>
        <span className="next" onClick={this.handleNext}>NEXT</span>
      </section>
      <div className="credits">
        Credits: <a href="https//www.niclamarino.com">www.niclamarino.com</a>
      </div>
    </div>
    );
  }
}

export default App;
