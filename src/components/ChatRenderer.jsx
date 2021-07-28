import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";

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
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const onSelectOption = (index, to) => {
    setShowPrompt(false);
    setShowUserOptions(false);
    if (to === -1) {
      setProgression([]);
      setCurrentStory(0);
      return;
    }
    const progressionCopy = progression.slice();
    progressionCopy.push([currentStory, index]);
    setProgression(progressionCopy);
    setCurrentStory(to);
    scroll.scrollToBottom({ duration: 0, smooth: false });
  };

  return (
    <div className="chat-renderer">
      {progression.map((p, index) => (
        <React.Fragment key={`progression-story-${p[0]}-${index}`}>
          <StorytellerSpeech
            story={p[0]}
            isLatest={false}
            key={`storyteller-speech-for-${p[0]}`}
          />
          <UserSpeech
            story={p[0]}
            option={p[1]}
            key={`user-speech-for-${p[0]}`}
          />
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
        <UserOptions
          story={currentStory}
          onSelectOption={onSelectOption}
          showUserOptions={showUserOptions}
          key={`user-speech-for-${currentStory}`}
        />
      )}
      <div className="chat-renderer__prompt">
        {showPrompt ? (
          "Select one of the options above to continue the story!"
        ) : (
          <span>&nbsp;</span>
        )}
      </div>
    </div>
  );
};

export default ChatRenderer;
