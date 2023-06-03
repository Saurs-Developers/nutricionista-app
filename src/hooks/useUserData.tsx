import { useOutletContext } from "react-router-dom"

import { IUserData } from "@/@types/user"

export const useUserData = () => {
  return useOutletContext<IUserData>()
}
