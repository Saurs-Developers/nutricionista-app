import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home/Home"
import { NotFound } from "./pages/NotFound/NotFound"
import { Layout } from "./layout"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/info" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
