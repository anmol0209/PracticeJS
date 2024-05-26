import React from "react";
import obj from "./mockData.json";

const Objects = () => {
  const output = {};

  obj.forEach((item) => {
    return output[item.key] ? output[item.key].push[item] : output.push[item];
  });
  return <div>{output}</div>;
};

export default Objects;
