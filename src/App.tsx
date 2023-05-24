import { Route, Routes } from "react-router-dom"

import { Chat } from "./pages/Chat"
import { Diet } from "./pages/Diet"
import { Faq } from "./pages/Faq"
import { FirstAccess } from "./pages/FirstAccess"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Profile } from "./pages/Profile"
import { Question } from "./pages/Question"
import { Recipes } from "./pages/Recipes"
import { ResetPassword } from "./pages/ResetPassword"
import { Workout } from "./pages/Workout"
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
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/first-access" element={<FirstAccess />} />
    </Routes>
  )
}
