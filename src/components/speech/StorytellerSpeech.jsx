import React, { useEffect, useState } from "react";

import { images } from "../../data/images";
import { stories } from "../../data/stories";
import StorytellerIcon from "../icons/StorytellerIcon";

import "./Speech.scss";

const StorytellerSpeech = ({
  story,
  setShowUserOptions,
  isLatest,
  scrollToBottom,
}) => {
  const { text } = stories[story];
  const [textToRender, setTextToRender] = useState([]);

  useEffect(() => {
    if (!isLatest) {
      setTextToRender(text);
      return;
    }
    text.forEach((t, index) => {
      setTimeout(() => {
        setTextToRender((curr) => [...curr, t]);
        scrollToBottom();
      }, (index + 1) * 1000);
    });
    setTimeout(() => {
      setShowUserOptions(true);
    }, (text.length + 1) * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return textToRender.length > 0 ? (
    <div className="storyteller-speech speech" key={`storyteller-${story}`}>
      {textToRender.length > 0 && (
        <StorytellerIcon key={`storyteller-${story}-icon`} />
      )}
      <div
        className="storyteller-speech-bubble__container"
        key={`storyteller-${story}-bubble-container`}
      >
        {textToRender.map((t, index) => {
          if (images[t] != null) {
            return (
              <div
                className="storyteller-speech-bubble bubble image-bubble"
                key={`storyteller-${story}-text-${index}`}
              >
                <img src={images[t]} alt="t" />
              </div>
            );
          }
          return (
            <div
              className={`fade storyteller-speech-bubble bubble${
                t.startsWith("→") ? " direction" : ""
              }`}
              key={`storyteller-${story}-text-${index}`}
            >
              {t}
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
};

export default StorytellerSpeech;
