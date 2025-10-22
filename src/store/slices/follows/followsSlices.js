import { createSlice } from "@reduxjs/toolkit";
import { usersData } from "../../../data/users";

const followsSlice = createSlice({
    name: "follows",
    initialState: {
        users:usersData,
        userStory:{}
    },
    reducers: {
    getUserStory(state, action) {
       return {
           ...state,
           userStory: state.users.find((el) => el.id == action.payload)
       };
   },
     storyInWiew(state, action) {
       return {
           ...state,
           users: state.users.map((el) => el.id == action.payload ? {...el,isStoryWiew:true} : el)
       };
   }

    }
})

export const followsReducer = followsSlice.reducer;
export const { getUserStory,storyInWiew } = followsSlice.actions; 