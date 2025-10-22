import { Ellipsis } from "lucide-react";
import "./story_settings_box.css";

export const StorySettingsBox = ({ el,index }) => {

  return (
    <div className="story_settings-box">
      <div className="story-progres-bar-container">
        {el?.storys.map((_, idx) => (
          <div
            key={idx}
            className={`progres-bar`}
          ></div>
        ))}
      </div>

      <div className="story_settings">
        <div className="round_user_image">
          <img src={el?.image} alt="user" />
          <p>{el?.username}</p>
          <span>16 ч.</span>
        </div>
        <Ellipsis />
      </div>
    </div>
  );
};
