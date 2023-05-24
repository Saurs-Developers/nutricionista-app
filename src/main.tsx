import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Chat, Question } from "phosphor-react"

import { Diet } from "./pages/Diet"
import { Faq } from "./pages/Faq"
import { FirstAccess } from "./pages/FirstAccess"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Profile } from "./pages/Profile"
import { Recipes } from "./pages/Recipes"
import { ResetPassword } from "./pages/ResetPassword"
import { Workout } from "./pages/Workout"
import { Layout } from "./layout"

import "./index.css"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

const routesConfig = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/first-access",
    element: <FirstAccess />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/workout",
        element: <Workout />,
      },
      {
        path: "/diet",
        element: <Diet />,
      },
      {
        path: "/question",
        element: <Question />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
    ],
  },
]

const router = createBrowserRouter(routesConfig)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
