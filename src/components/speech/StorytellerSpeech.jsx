import React from "react";
import { stories } from "../../data/stories";
import StorytellerIcon from "../icons/StorytellerIcon";

import "./Speech.scss";

const StorytellerSpeech = ({ story }) => {
  const { text } = stories[story];
  return (
    <div className="storyteller-speech speech" key={`storyteller-${story}`}>
      <StorytellerIcon key={`storyteller-${story}-icon`} />
      <div
        className="storyteller-speech-bubble__container"
        key={`storyteller-${story}-bubble-container`}
      >
        {text.map((t, index) => (
          <div
            className="storyteller-speech-bubble bubble"
            key={`storyteller-${story}-text-${index}`}
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorytellerSpeech;
