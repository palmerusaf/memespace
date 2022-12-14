"use client";
import { useState } from "react";

export default function PageNav({
  index = 1,
}: {
  index?: number;
}): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(index);
  return (
    <div className="">
      <nav>
        {activeIndex !== 1 && <button>Prev</button>}
        <ol>
        </ol>
        {activeIndex !== 37 && <button>Last</button>}
      </nav>
    </div>
  );
}
