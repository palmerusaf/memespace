"use client";
import { useEffect, useState } from "react";
import getNavIndexes from "./getNavIndexes";

export default function PageNav({ index = 1 }: { index?: number }) {
  const [activeIndex, setActiveIndex] = useState(index);
  const [navIndexes, setNavIndexes] = useState(getNavIndexes(activeIndex));

  const incrementIndex = () => setActiveIndex(() => activeIndex + 1);
  const decrementIndex = () => setActiveIndex(() => activeIndex - 1);
  useEffect(() => {
    setNavIndexes(getNavIndexes(activeIndex));
  }, [activeIndex]);

  return (
    <nav className="flex text-gray-900 gap-1 font-bold">
      <div className="w-7">
        {activeIndex !== 1 && (
          <button
            onClick={decrementIndex}
            className="w-7 bg-blue-600 text-white rounded-full border-2 border-white hover:-translate-y-1 duration-300 shadow-md hover:shadow-slate-500"
            aria-label="Next Page"
          >{`<`}</button>
        )}
      </div>
      <ol className="flex gap-[2px]">
        {navIndexes.map((index) => {
          return (
            <li key={index}>
              <button
                onClick={() => setActiveIndex(index)}
                className={`w-7 bg-blue-600 rounded-full border-2 border-white ${
                  index === activeIndex
                    ? "-translate-y-1 shadow-md text-white shadow-slate-500 text"
                    : "md:hover:-translate-y-1 md:hover:text-white duration-300 shadow-md hover:shadow-slate-500"
                }`}
                aria-label={`Page ${index}`}
              >
                {index}
              </button>
            </li>
          );
        })}
      </ol>
      <div className="w-7">
        {activeIndex !== 37 && (
          <button
            onClick={incrementIndex}
            className="w-7 bg-blue-600 text-white rounded-full border-2 border-white hover:-translate-y-1 duration-300 shadow-md hover:shadow-slate-500"
            ariea-label="Previous Page"
          >{`>`}</button>
        )}
      </div>
    </nav>
  );
}
