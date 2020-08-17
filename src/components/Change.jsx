import React, { Component } from "react";

const textArray = [
  "Game Developer",
  "Data Scientist",
  "Full Stack Developer",
  "Cloud Practioner",
  "Software Developer",
  "Ethical Hacker",
  "Game Developer",
  "Video Editor",
  "Mobile App Developer",
];

class Home extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
      <section>
        <h2>I am an amateaur ..... </h2>
        <p>
          <span>{textThatChanges}</span>
        </p>
      </section>
    );
  }
}

export default Home;
