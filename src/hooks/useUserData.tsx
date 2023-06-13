import { createContext, ReactNode, useContext } from "react"
import { useQuery } from "@tanstack/react-query"

import { IUserData } from "@/@types/user"
import { apiPrivate } from "@/api/api"
import { Fallback } from "@/components/Fallback"

import { useAuth } from "./useAuth"

interface Props {
  children: ReactNode
}

interface UserData {
  data: IUserData | undefined
  isLoading: boolean
}

const userDataContext = createContext({} as UserData)

export const UserDataProvider = ({ children }: Props) => {
  const { userInfo } = useAuth()

  const id = userInfo?.user_id

  const { data, isLoading } = useQuery<IUserData>({
    queryKey: ["userInfo"],
    queryFn: () =>
      apiPrivate.get(`/v1/clientes/${id}`).then(({ data }) => data),
  })

  if (isLoading) return <Fallback />

  return (
    <userDataContext.Provider value={{ data, isLoading }}>
      {children}
    </userDataContext.Provider>
  )
}

export const useUserData = () => {
  const { data, isLoading } = useContext(userDataContext)

  return { data, isLoading }
}
