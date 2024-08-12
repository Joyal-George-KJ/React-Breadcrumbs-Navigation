import React from "react";
import { useParams } from "react-router-dom";

function DynamicSection() {
  const { id } = useParams();

  return (
    <div className="w-4/4 grid grid-cols-1 justify-center gap-6 mx-auto">
      <div className="group flex cursor-pointer flex-col items-start gap-2 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <img
                src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
                className="w-full transition-all duration-300 group-hover:opacity-90"
                alt="demmy img"
            />
            <div className="flex flex-col gap-4 p-8">
                <h2 className="text-2xl font-semibold">Card Title</h2>
                <p className="text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                </p>
                <button
                    className="w-full rounded-md bg-blue-600 px-5 py-2 text-white shadow-xl transition-all duration-300 hover:bg-blue-700"
                >
                    {id}
                </button>
            </div>
        </div>
    </div>
  );
}

export default DynamicSection;
