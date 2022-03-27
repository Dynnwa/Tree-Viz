import React from "react";
import {Tree} from "react-tree-graph";

import NodeList from "./NodeList";

import "./Viz.css";

const Viz = ({ data, delayedList }) => (
  <div className="visualizer-container">
    {/* Render Tree with data passed as prop */}
    <Tree
      data={data}
      height={400}
      width={400}
      svgProps={{
        transform: "rotate(90)"
      }}
      textProps={{
        transform: "rotate(270)"
      }}
      animated={true}
    />
    {/* Render List of traversed nodes passed as prop */}
    <NodeList delayedList={delayedList} />
  </div>
);

export default Viz;