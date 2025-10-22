import { Route, Routes } from "react-router-dom"
import { Layout } from "../pages/Layout/Layout"
import { StoryPage } from "../pages/StoryPage/StoryPage"
import { HomePage } from "../pages/HomePage/HomePage"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/"  element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/storys/:id" element={<StoryPage/>}/>
            </Route>
        </Routes>
    )
}
