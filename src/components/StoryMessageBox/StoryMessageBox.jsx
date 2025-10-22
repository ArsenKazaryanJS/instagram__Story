import { Heart, Send } from "lucide-react"
import './story_message_box.css'

export const StoryMessageBox = () => {
    return (
     <div className="story-message-box">
              <input type="text" placeholder="ответь..."/>
              <Heart />
              <Send />
            </div>
    )
}
