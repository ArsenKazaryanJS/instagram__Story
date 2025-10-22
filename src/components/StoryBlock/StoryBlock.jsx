import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./story_block.css";
import { useStorySlide } from "../../hooks/useStorySlide";
import { StoryCard } from "../StoryCard/StoryCard";
import { useSelector } from "react-redux";

export const StoryBlock = () => {
  const follows = useSelector(state => state.follows.users)
  const containerRef = useRef(null);
  const { handleScroll, isScroll } = useStorySlide(containerRef,645);


  return (
    <div className="middleHomeSide">
      <div className="story_container">
        <div className="storyBlock" ref={containerRef}>
          {follows.map((el) => (
          <StoryCard key={el.id} el={el}/>
          ))}
        </div>
        {isScroll > 0 && (
          <div className="slide_left" onClick={() => handleScroll("left")}>
            <ChevronLeft />
          </div>
        )}
        {follows.length > 7 && (
          <div className="slide_right" onClick={() => handleScroll("right")}>
            <ChevronRight />
          </div>
        )}
      </div>
    </div>
  );
};
