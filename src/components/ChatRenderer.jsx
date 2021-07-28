import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import StorytellerSpeech from "./speech/StorytellerSpeech";
import UserSpeech from "./speech/UserSpeech";
import UserOptions from "./speech/UserOptions";

import "./ChatRenderer.scss";
import "./Transitions.scss";

const ChatRenderer = ({
  currentStory,
  setCurrentStory,
  progression,
  setProgression,
}) => {
  const bottomElementRef = useRef(null);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const scrollToBottom = () => {
    bottomElementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onSelectOption = (index, to) => {
    setShowPrompt(false);
    setShowUserOptions(false);
    scrollToBottom();
    if (to === -1) {
      setProgression([]);
      setCurrentStory(0);
      return;
    }
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
          <StorytellerSpeech story={p[0]} isLatest={false} />
          <UserSpeech story={p[0]} option={p[1]} />
        </React.Fragment>
      ))}
      <StorytellerSpeech
        story={currentStory}
        setShowUserOptions={(val) => {
          setShowUserOptions(val);
          setShowPrompt(true);
          scrollToBottom();
        }}
        isLatest={true}
        key={`storyteller-speech-for-${currentStory}`}
        scrollToBottom={scrollToBottom}
      />
      {showUserOptions && (
        <CSSTransition timeout={500} classNames="fade">
          <UserOptions
            story={currentStory}
            onSelectOption={onSelectOption}
            showUserOptions={showUserOptions}
          />
        </CSSTransition>
      )}
      {showPrompt && (
        <div className="chat-renderer__prompt">
          Select one of the options above to continue the story!
        </div>
      )}
      <div ref={bottomElementRef} />
    </div>
  );
};

export default ChatRenderer;
