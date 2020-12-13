import React from "react";
import { lessonsBlockOne } from "./lessons";
import ProgramBlock from "./ProgramBlock";

export default function Program() {
  return (
    <div id="program" className="program-section">
      <ProgramBlock blockName="ПРОГРАММА СЕМИНАРА" lessons={lessonsBlockOne} />
    </div>
  );
}
