import { useParams } from "react-router-dom";
import { StorysContainer } from "../../components/StorysContainer/StorysContainer";
import "./story_page.css";
import { useEffect } from "react";
import { getUserStory } from "../../store/slices/follows/followsSlices";
import { useDispatch } from "react-redux";

export const StoryPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;
    dispatch(getUserStory(id));
  }, [id]);

  return (
    <div className="story_page">
      <StorysContainer />
    </div>
  );
};
