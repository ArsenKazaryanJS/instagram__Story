import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storyInWiew } from "../../store/slices/follows/followsSlices";

export const StoryCard = ({ el }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleGetStoryPage = (id) => {
    navigate(`/storys/${id}`);
    setTimeout(()=>{
    dispatch(storyInWiew(id))
    },300)

  };

  return (
    <div className="storyCard" onClick={() => handleGetStoryPage(el.id)}>
      <div className={`${!el.isStoryWiew ? 'img_box' : "img_box_inWiew"} `}>
        <img src={el?.image} />
      </div>
      <div className="profile_name">
        <p>
          {el.username.length > 9
            ? `${el.username.substring(0, 9)}...`
            : el.username}
        </p>
      </div>
    </div>
  );
};
