import { Route, Routes } from "react-router-dom"

import { Chat } from "./pages/Chat/Chat"
import { Faq } from "./pages/Faq/Faq"
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import { Layout } from "./layout"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
