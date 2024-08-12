import React from "react";
import SectionCards from "../components/SectionCards";

function Section() {
  return (
    <div className="w-4/4 grid sm:grid-cols-1 md:grid-cols-2 justify-center gap-6 mx-auto">
      {Array.from({ length: 14 }, (_, i) => i).map((num) => (
        <SectionCards key={num} id={Math.floor(Math.random() * 1300)} />
      ))}
    </div>
  );
}

export default Section;
