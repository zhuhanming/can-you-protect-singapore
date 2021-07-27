import React, { useEffect, useRef } from "react";

import StorytellerSpeech from "./speech/StorytellerSpeech";
import UserSpeech from "./speech/UserSpeech";
import UserOptions from "./speech/UserOptions";

import "./ChatRenderer.scss";

const ChatRenderer = ({
  currentStory,
  setCurrentStory,
  progression,
  setProgression,
}) => {
  const bottomElementRef = useRef(null);
  const scrollToBottom = () => {
    bottomElementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onSelectOption = (index, to) => {
    const progressionCopy = progression.slice();
    progressionCopy.push([currentStory, index]);
    setProgression(progressionCopy);
    setCurrentStory(to);
  };

  useEffect(scrollToBottom, [progression]);

  return (
    <div className="chat-renderer">
      {progression.map((p, index) => (
        <React.Fragment key={`progression-story-${p[0]}-${index}`}>
          <StorytellerSpeech story={p[0]} />
          <UserSpeech story={p[0]} option={p[1]} />
        </React.Fragment>
      ))}
      <StorytellerSpeech story={currentStory} />
      <UserOptions story={currentStory} onSelectOption={onSelectOption} />
      <div ref={bottomElementRef} />
    </div>
  );
};

export default ChatRenderer;
