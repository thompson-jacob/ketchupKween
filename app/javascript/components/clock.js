import React from "react"
import ReactDOM from "react-dom"
import htm from "htm"

const h = htm.bind(React.createElement)

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return h `
      <div>
        <h1>Hello, world!</h1>
        <h2>It is ${this.state.date.toLocaleTimeString()}.</h2>
      </div>
    `
  }
}

ReactDOM.render(
  h` <${Clock} />`,
  document.getElementById('clock')
);