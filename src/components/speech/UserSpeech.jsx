import React from "react";
import { stories } from "../../data/stories";
import UserIcon from "../icons/UserIcon";

import "./Speech.scss";

const UserSpeech = ({ story, option }) => {
  const { role, options } = stories[story];
  return (
    <div className="user-speech speech" key={`user-${story}`}>
      <UserIcon role={role} key={`user-${story}-icon`} />
      <div
        className="user-speech-bubble bubble"
        key={`user-${story}-option-${option}`}
      >
        {options[option].text}
      </div>
    </div>
  );
};

export default UserSpeech;
