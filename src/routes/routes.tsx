import { Route, Routes } from "react-router-dom"

import { useAuth } from "@/hooks/useAuth"
import { NotFound } from "@/pages/404"
import { Chat } from "@/pages/Chat"
import { Diet } from "@/pages/Diet"
import { Error } from "@/pages/Error"
import { Faq } from "@/pages/Faq"
import { FirstAccess } from "@/pages/FirstAccess"
import { Home } from "@/pages/Home"
import { Login } from "@/pages/Login"
import { Profile } from "@/pages/Profile"
import { Question } from "@/pages/Question"
import { Recipes } from "@/pages/Recipes"
import { ResetPassword } from "@/pages/ResetPassword"
import { ResetPasswordEmail } from "@/pages/ResetPasswordEmail"
import { ResetPasswordFallback } from "@/pages/ResetPasswordFallback"
import { Workout } from "@/pages/Workout"

import { Layout } from "../layout/index"

export function AppRoutes() {
  const { isLoggedIn } = useAuth()

  const first_access = localStorage.getItem("first_access")

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="error" element={<Error />} />
      <Route path="login" element={!isLoggedIn ? <Login /> : <Home />} />
      <Route
        path="reset-password-email"
        element={!isLoggedIn ? <ResetPasswordEmail /> : <Home />}
      />
      <Route
        path="reset-password-fallback"
        element={<ResetPasswordFallback />}
      />
      <Route
        path="reset-password/"
        element={!isLoggedIn ? <ResetPassword /> : <Home />}
      />
      <Route
        path="first-access"
        element={first_access ? <FirstAccess /> : <Home />}
      />
      <Route path="/" element={isLoggedIn ? <Layout /> : <Login />}>
        <Route path="/" element={<Home />} />
        <Route path="chat" element={<Chat />} />
        <Route path="profile" element={<Profile />} />
        <Route path="faq" element={<Faq />} />
        <Route path="workout/:id" element={<Workout />} />
        <Route path="diet/:id" element={<Diet />} />
        <Route path="question" element={<Question />} />
        <Route path="recipes" element={<Recipes />} />
      </Route>
    </Routes>
  )
}
