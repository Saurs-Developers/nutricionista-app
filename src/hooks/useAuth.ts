import jwt_decode from "jwt-decode"

export const useAuth = () => {
  const token = localStorage.getItem("access-token")

  if (token) {
    const decoded = jwt_decode(token!)
  }
}
