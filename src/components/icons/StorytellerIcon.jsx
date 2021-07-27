import React from "react";

import StoryTellerImage from "../../assets/images/storyteller.png";

import "./Icon.scss";

const StorytellerIcon = () => {
  return (
    <img
      src={StoryTellerImage}
      className="storyteller-icon icon"
      alt="Storyteller Icon"
    />
  );
};

export default StorytellerIcon;
