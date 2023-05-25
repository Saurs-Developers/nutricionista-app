import { Outlet } from "react-router-dom"
import { Chat, House, Info, Person } from "phosphor-react"

import { useAuth } from "@/hooks/useAuth"

import { CustomLink } from "../components/CustomLink"
import { Typography } from "../components/Typography"

export function Layout() {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) return null

  return (
    <div className="flex flex-col h-screen">
      <main className="max-h-full overflow-auto flex-1 px-4 py-8">
        {<Outlet />}
      </main>
      <footer className="border-t-2 border-brand-primary">
        <nav className="flex items-center justify-between p-2 text-neutral-600">
          <CustomLink
            to="/"
            base="flex flex-col gap-2 items-center px-4 transition"
            active="text-brand-primary"
          >
            <House size={24} />
            <Typography
              className="font-medium"
              type="body"
              variant="xs"
              as="span"
            >
              Home
            </Typography>
          </CustomLink>
          <CustomLink
            to="chat"
            base="flex flex-col gap-2 items-center px-4 transition"
            active="text-brand-primary"
          >
            <Chat size={24} />
            <Typography
              className="font-medium"
              type="body"
              variant="xs"
              as="span"
            >
              Chat
            </Typography>
          </CustomLink>
          <CustomLink
            to="profile"
            base="flex flex-col gap-2 items-center px-4 transition"
            active="text-brand-primary"
          >
            <Person size={24} />
            <Typography
              className="font-medium"
              type="body"
              variant="xs"
              as="span"
            >
              Perfil
            </Typography>
          </CustomLink>
          <CustomLink
            to="faq"
            base="flex flex-col gap-2 items-center px-4 transition"
            active="text-brand-primary"
          >
            <Info size={24} />
            <Typography
              className="font-medium"
              type="body"
              variant="xs"
              as="span"
            >
              FAQ
            </Typography>
          </CustomLink>
        </nav>
      </footer>
    </div>
  )
}
