import React from "react";
import { stories } from "../../data/stories";
import UserIcon from "../icons/UserIcon";

import "./Speech.scss";

const UserOptions = ({ story, onSelectOption, myRef }) => {
  const { role, options } = stories[story];

  return (
    <div className="user-speech speech" key={`user-${story}`} ref={myRef}>
      <UserIcon role={role} key={`user-${story}-icon`} />
      <div className="user-option-wrapper" key={`user-${story}-option-wrapper`}>
        {options.map((o, index) => (
          <button
            className="user-option user-speech-bubble bubble"
            key={`user-${story}-option-${index}`}
            onClick={() => onSelectOption(index, o.to)}
          >
            {o.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserOptions;
