import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { images } from "../../data/images";
import { stories } from "../../data/stories";
import StorytellerIcon from "../icons/StorytellerIcon";

import "./Speech.scss";
import "../Transitions.scss";

const StorytellerSpeech = ({
  story,
  setShowUserOptions,
  isLatest,
  scrollToBottom,
}) => {
  const { text } = stories[story];
  const [textToRender, setTextToRender] = useState([]);

  useEffect(() => {
    console.log(textToRender);
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

  return (
    <div className="storyteller-speech speech" key={`storyteller-${story}`}>
      {textToRender.length > 0 && (
        <StorytellerIcon key={`storyteller-${story}-icon`} />
      )}
      <TransitionGroup>
        <div
          className="storyteller-speech-bubble__container"
          key={`storyteller-${story}-bubble-container`}
        >
          {textToRender.map((t, index) => {
            if (images[t] != null) {
              return (
                <CSSTransition
                  classNames="fade"
                  className="storyteller-speech-bubble bubble image-bubble"
                  timeout={500}
                  key={`storyteller-${story}-text-${index}`}
                >
                  <div>
                    <img src={images[t]} alt="t" />
                  </div>
                </CSSTransition>
              );
            }
            return (
              <CSSTransition
                className="fade storyteller-speech-bubble bubble"
                timeout={500}
                key={`storyteller-${story}-text-${index}`}
              >
                <div>{t}</div>
              </CSSTransition>
            );
          })}
        </div>
      </TransitionGroup>
    </div>
  );
};

export default StorytellerSpeech;
