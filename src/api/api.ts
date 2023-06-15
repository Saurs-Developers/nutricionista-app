import { redirect } from "react-router-dom"
import axios from "axios"

export const baseURL = import.meta.env.VITE_BASE_URL

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

export const apiPrivate = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

apiPrivate.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access-token")

    if (token) {
      config.headers!["Authorization"] = "Bearer " + token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

apiPrivate.interceptors.response.use(
  (res) => {
    return res
  },
  async (error) => {
    console.log(error)
    const originalConfig = error.config

    if (originalConfig.url !== `${baseURL}/v1/auth/login` && error.response) {
      if (
        (error.response.status == 401 &&
          error.response.data.error == "ExpiredJwtException") ||
        error.response.data.error == "Unauthorized"
      ) {
        originalConfig._retry = true

        try {
          const oldRefresh = localStorage.getItem("refresh-token")!

          const res = await api.post(`${baseURL}/v1/auth/refresh`, {
            refresh_token: oldRefresh,
          })

          const access = res.data.token
          const refresh = res.data.refresh_token

          localStorage.setItem("access-token", access)
          localStorage.setItem("refresh-token", refresh)

          console.log("Refreshed")

          return apiPrivate(originalConfig)
        } catch (e) {
          redirect("/login")
          localStorage.removeItem("access-token")
          localStorage.removeItem("refresh-token")

          console.log("Expired")

          return Promise.reject(e)
        }
      }
    }
  },
)
