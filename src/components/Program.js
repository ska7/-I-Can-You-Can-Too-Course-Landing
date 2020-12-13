import React from "react";
import { courseLessons } from "./courseData";
import ProgramBlock from "./ProgramBlock";

export default function Program() {
  return (
    <div id="program" className="program-section">
      <ProgramBlock blockName="ПРОГРАММА СЕМИНАРА" lessons={courseLessons} />
    </div>
  );
}
