import { ChevronLeft, ChevronRight } from "lucide-react"

export const StoryPrevNext = ({handlePrevAndNext}) => {
    return (
       <div className="story_page_slider">
                <ChevronLeft className="prev"  onClick={(e) => {handlePrevAndNext('prev',e); }}/>
                <ChevronRight className="next" onClick={(e) => {handlePrevAndNext('next',e); }} />
              </div>
    )
}
