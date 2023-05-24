import axios from "axios"

export const api = axios.create({
  baseURL: "https://nutricionista-api-auth.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

api.interceptors.request.use(
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

api.interceptors.response.use(
  (res) => {
    return res
  },
  async (error) => {
    console.log(error)
    const originalConfig = error.config

    if (
      originalConfig.url !==
        "https://nutricionista-api-auth.up.railway.app/api/v1/login" &&
      error.response
    ) {
      if (
        (error.response.status == 401 &&
          error.response.data.error == "ExpiredJwtException") ||
        error.response.data.error == "Unauthorized"
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

          return api(originalConfig)
        } catch (e) {
          window.location.replace("/login")
          console.log("Expired")
          localStorage.removeItem("access-token")
          localStorage.removeItem("refresh-token")
          return Promise.reject(e)
        }
      }
    }
  },
)
