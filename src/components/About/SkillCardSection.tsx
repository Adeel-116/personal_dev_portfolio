import React from "react";
import SkillCard from "./SkillCard";

const SkillCardSection = () => {
  return (
    <div className="w-full flex justify-center items-center gap-5">
      <SkillCard className="flex-1" />
      <SkillCard className="flex-1" />
      <SkillCard className="flex-1" />
    </div>
  );
};

export default SkillCardSection;
