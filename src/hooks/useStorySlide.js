import { useState } from "react";

export const useStorySlide = (containerRef,scrollAmount) => {
  const [isScroll, setIsScroll] = useState(0);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    // const scrollAmount = 645; //storyBlock 645px
    const maxScroll = container.scrollWidth - container.clientWidth; // Calculate max scrollable width

    if (direction === "left" && isScroll > 0) {
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
      setIsScroll(isScroll - scrollAmount);
    } else if (direction === "right" && isScroll < maxScroll) {
      // Check if we can scroll right
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
      setIsScroll(isScroll + scrollAmount);
    }
  };

  return { handleScroll, isScroll, setIsScroll };
};
