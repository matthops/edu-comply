import React, { Component } from "react";
import * as d3 from "d3";

class BarViz extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log(this.props);
    return (
      <svg height="30">
        <g>
          <rect
            x="160"
            y="160"
            height="30"
            width={this.props.totalComps}
            fill="red"
          />
          <rect
            x="160"
            y="160"
            height="30"
            width={this.props.totalNonComps}
            fill="green"
          />
        </g>
      </svg>
    );
  }
}

export default BarViz;
