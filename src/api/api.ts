import axios from "axios"

const baseURL = "https://nutricionista-api-dev.up.railway.app/api"

export const apiPrivate = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

export const api = axios.create({
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

    if (originalConfig.url !== `${baseURL}v1/login` && error.response) {
      if (
        error.response.status == 401 &&
        error.response.data.error == "ExpiredJwtException"
      ) {
        originalConfig._retry = true

        try {
          const res = await axios.post("/auth/refresh", {
            headers: {
              Authorization: localStorage.getItem("refresh-token")!,
            },
          })

          const access = res.data.token
          const refresh = res.data.refresh_token

          localStorage.setItem("access-token", access)
          localStorage.setItem("refresh-token", refresh)

          console.log("Refreshed")

          return apiPrivate(originalConfig)
        } catch (e) {
          // window.location.replace("/login")
          console.log("Expired")
          localStorage.removeItem("access-token")
          localStorage.removeItem("refresh-token")
          return Promise.reject(e)
        }
      }
    }
  },
)
