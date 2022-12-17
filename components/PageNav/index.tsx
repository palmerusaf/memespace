"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";
import getNavIndexes from "./getNavIndexes";

export default function PageNav() {
  let segment = useSelectedLayoutSegment();
  const [activeIndex, setActiveIndex] = useState(parseInt(segment || "1"));
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
          <Link
            aria-label="Next Page"
            onClick={decrementIndex}
            href={`/new-meme/${activeIndex - 1}`}
          >
            <div className="w-7 text-center bg-blue-600 text-white rounded-full border-2 border-white hover:-translate-y-1 duration-300 shadow-md hover:shadow-slate-500">{`<`}</div>
          </Link>
        )}
      </div>
      <ol className="flex gap-[2px]">
        {navIndexes.map((index) => {
          return (
            <li key={index}>
              <Link
                aria-label={`Page ${index}`}
                href={`/new-meme/${index}`}
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className={`w-7 bg-blue-600 text-center rounded-full border-2 border-white ${
                    index === activeIndex
                      ? "-translate-y-1 shadow-md text-white shadow-slate-500 text"
                      : "md:hover:-translate-y-1 md:hover:text-white duration-300 shadow-md hover:shadow-slate-500"
                  }`}
                >
                  {" "}
                  {index}
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
      <div className="w-7">
        {activeIndex !== 37 && (
          <Link href={`/new-meme/${activeIndex + 1}`}>
            <button
              onClick={incrementIndex}
              className="w-7 bg-blue-600 text-white rounded-full border-2 border-white hover:-translate-y-1 duration-300 shadow-md hover:shadow-slate-500"
              ariea-label="Previous Page"
            >{`>`}</button>
          </Link>
        )}
      </div>
    </nav>
  );
}
