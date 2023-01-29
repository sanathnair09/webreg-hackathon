import React from "react";
import anteater from "../../assets/imgs/uci-anteater-logo.png";
import ClassSearchbar from "./ClassSearchbar";
import TermDropdown from "./TermDropdown";
function ScheduleOfClasses() {
  return (
    <div className="flex flex-col w-1/2 mr-2 ml-1 bg-inner-background rounded-lg p-2 ">
      {/* TODO */}
      {/* <img 
        src={anteater}
        className="aspect-video  h-1/2 opacity-40 -rotate-45 "
      /> */}
      <TermDropdown term="Winter Quarter 2023" />
      <ClassSearchbar />
    </div>
  );
}

export default ScheduleOfClasses;