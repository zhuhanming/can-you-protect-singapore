import React from "react";

import MalayaImage from "../../assets/images/malaya.png";
import SingaporeImage from "../../assets/images/singapore.png";
import BritainImage from "../../assets/images/britain.png";
import BlankImage from "../../assets/images/blank.png";

import "./Icon.scss";

const UserIcon = ({ role }) => {
  let image;
  switch (role) {
    case "SG":
      image = SingaporeImage;
      break;
    case "MY":
      image = MalayaImage;
      break;
    case "BR":
      image = BritainImage;
      break;
    default:
      image = BlankImage;
  }

  return <img src={image} className="user-icon icon" alt="User Icon" />;
};

export default UserIcon;
