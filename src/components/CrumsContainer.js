import React from "react";
import { useSelector } from "react-redux";
import Crums from "./Crums";

function CrumsContainer() {
    const breadcrumbs = useSelector((state) => state.breadCrumbs.path);
    return (
      <div className="flex flex-row m-0 items-center shadow-sm shadow-blue-200 rounded-lg px-2 w-fit sticky top-0 left-0">
          {breadcrumbs.map((val, ind) => (
              <Crums key={ind} value={val} index={ind} />
          ))}
      </div>
    );
}

export default CrumsContainer;
