import React from "react";
import layout from "../img/icons/maket.png";
import animationIcon from "../img/icons/animation.png";
import clientIcon from "../img/icons/client.png";
import mentorshipIcon from "../img/icons/mentorship.png";
import {
  lessonsBlockFour,
  lessonsBlockOne,
  lessonsBlockThree,
  lessonsBlockTwo,
} from "./lessons";
import ProgramBlock from "./ProgramBlock";

export default function Program() {
  return (
    <div id="program" className="program-section">
      <ProgramBlock
        icon={layout}
        blockName="ПРОГРАММА СЕМИНАРА"
        lessons={lessonsBlockOne}
      />
    </div>
  );
}
