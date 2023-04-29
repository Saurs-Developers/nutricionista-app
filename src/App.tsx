import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import { Layout } from "./layout"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/info" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
