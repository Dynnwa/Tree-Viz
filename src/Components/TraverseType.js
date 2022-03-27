import React from "react";
import Select from "react-select";

import "./TraverseType.css";
//import "react-select/dist/react-select.css";

const options=[
  { label: "preorder", value: "preorder" },
  { label: "inorder", value: "inorder" },
  { label: "postorder", value: "postorder" },
  { label: "level order", value: "level order" }
]

const TraverseType = ({ selectedTraversal, handleChange }) => (
  <div className="TraverseType-container">
    <Select
      name="sort-select"
      value={selectedTraversal && selectedTraversal.value}
      onChange={handleChange}
      className="select-field"
      options={options}
      clearable={false}
    />
  </div>
);

export default TraverseType;