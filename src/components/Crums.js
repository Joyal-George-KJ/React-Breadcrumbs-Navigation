import React from "react";
import { Link } from "react-router-dom";
import { setCrumps } from "../store/slice/BreadCrumpSlice";
import { useDispatch } from "react-redux";

function Crums({ value, index }) {
  // Convert val to a lowercase URL path if it's a string
  const linkPath = typeof value === 'string' ? value.toLowerCase() : "/";
  const dispatch = useDispatch();
  const clickHandle = (newPath, ind) => {
    dispatch(setCrumps({ path: newPath, operation: ind }));
  };

  return (
    <>
      <Link
        className="text-[10px] pt-[4px] text-neutral-500"
        to={value === "Home" ? "/" : linkPath}
        onClick={() => clickHandle(value, index)}
      >
        {value}
      </Link>
      <span className="text-xl font-bold text-neutral-500 px-2">{" > "}</span>
    </>
  );
}

export default Crums;