import { useState, useEffect } from "react";

interface useNavProps{
    index:
}

export default function useNav({index}:useNavProps) {
    
};


const [activeIndex, setActiveIndex] = useState(index);
const [navIndexes, setNavIndexes] = useState(getNavIndexes(activeIndex));

const incrementIndex = () => setActiveIndex(() => activeIndex + 1);
const decrementIndex = () => setActiveIndex(() => activeIndex - 1);
useEffect(() => {
  setNavIndexes(getNavIndexes(activeIndex));
}, [activeIndex]);
