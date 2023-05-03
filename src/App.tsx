import { Route, Routes } from "react-router-dom"

import { Chat } from "./pages/Chat/Chat"
import { Diet } from "./pages/Diet/Diet"
import { Faq } from "./pages/Faq/Faq"
import { Home } from "./pages/Home/Home"
import { Profile } from "./pages/Profile/Profile"
import { Question } from "./pages/Question/Question"
import { Recipes } from "./pages/Recipes/Recipes"
import { Workout } from "./pages/Workout/Workout"
import { Layout } from "./layout"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/question" element={<Question />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
