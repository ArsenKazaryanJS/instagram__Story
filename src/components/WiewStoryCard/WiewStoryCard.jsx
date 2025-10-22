import { useRef } from "react";
import { randomGradient } from "../../helper/RandomGradient"
import { useStorysCarousel } from "../../hooks/useStorysCarousel";
import { StoryMessageBox } from '../StoryMessageBox/StoryMessageBox'
import {StoryPrevNext} from '../StoryPrevNext/StoryPrevNext'
import {StorySettingsBox} from '../StorySettingsBox/StorySettingsBox'


export const WiewStoryCard = ({el,index}) => {
     const storyRefs = useRef({});
    const { handleSelectStory, handlePrevAndNext, activeIndex } = useStorysCarousel(storyRefs);
    return (
       <div
            key={el.id}
            ref={(elRef) => (storyRefs.current[index] = elRef)}
            className={`story-wrapper ${index !== activeIndex && "no-active"}`}
            onClick={() => handleSelectStory(el, index)}
            style={{ background: randomGradient() }} >
            <StorySettingsBox el={el} index={index} />
            <img src={el?.storys[0]} />
            {index === activeIndex && (
              <StoryPrevNext handlePrevAndNext={handlePrevAndNext} />
            )}
            <StoryMessageBox />
          </div>
    )
}
