import { RouteObject } from "react-router-dom"

import { NotFound } from "@/pages/404"
import { Chat } from "@/pages/Chat"
import { Diet } from "@/pages/Diet"
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

export const routesConfig: RouteObject[] = [
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "reset-password-email",
    element: <ResetPasswordEmail />,
  },
  {
    path: "reset-password-fallback",
    element: <ResetPasswordFallback />,
  },
  {
    path: "reset-password/",
    element: <ResetPassword />,
  },
  {
    path: "first-access",
    element: <FirstAccess />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "workout",
        element: <Workout />,
      },
      {
        path: "diet",
        element: <Diet />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "recipes",
        element: <Recipes />,
      },
    ],
  },
]
