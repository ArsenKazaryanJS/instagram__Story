import { useSelector } from "react-redux";
import "./storys_slider.css";
import { StoryCard } from "../StoryCard/StoryCard";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { WiewStoryCard } from "../WiewStoryCard/WiewStoryCard";

export const StorysContainer = () => {
  const follows = useSelector((state) => state.follows.users);
  const userStory = useSelector((state) => state.follows.userStory);


  return (
    <div className="storys_container">
      <Link to={"/"}>
        <X className="x" />
      </Link>
      {follows?.map((el, index) => (
        <div key={el.id}  className="story-box">
        <WiewStoryCard el={el} index={index}/>
          {el.id !== userStory.id && (
            <div className="round">
              <StoryCard el={el}  />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
