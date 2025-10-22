import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserStory, storyInWiew } from "../store/slices/follows/followsSlices";

export const useStorysCarousel = (storyRefs) => {
  const dispatch = useDispatch();
  const follows = useSelector((state) => state.follows.users);
  const userStory = useSelector((state) => state.follows.userStory);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSelectStory = (story, index) => {
    setActiveIndex(index);
    dispatch(getUserStory(story.id));
    dispatch(storyInWiew(story.id))
  };

  const handlePrevAndNext = (prev_next, e) => {
    if (activeIndex < follows.length - 1 && prev_next === "next") {
      const nextIndex = activeIndex + 1;
      handleSelectStory(follows[nextIndex], nextIndex);
    } else if (activeIndex > 0 && prev_next === "prev") {
      const prevIndex = activeIndex - 1;
      handleSelectStory(follows[prevIndex], prevIndex);
    }
    e.stopPropagation();
  };

  useEffect(() => {
    const index = follows.findIndex((el) => el.id === userStory?.id);
    if (index !== -1) {
      setActiveIndex(index);
      if (storyRefs.current[index]) {
        storyRefs.current[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [userStory]);

  return { handleSelectStory, handlePrevAndNext, activeIndex };
};
