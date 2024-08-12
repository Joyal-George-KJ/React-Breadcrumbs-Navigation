import React from "react";
import "./Components.css";
import CrumsContainer from "./CrumsContainer";
import Nav from "./Nav";

function Navbar() {
    return (
        <>
            <CrumsContainer />
            <nav className="bg-white sticky top-3 mx-auto z-50 shadow rounded-2xl">
                <ul className="list-none text-xl left-2/4 flex mx-2 p-2  flex-row gap-8 justify-center items-center">
                    {["Home", "Section", "Contact"].map((val, ind) => (
                        <Nav val={val} key={ind} />
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
