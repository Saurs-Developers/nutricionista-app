import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { routesConfig } from "./routes/routes"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // REMOVER EM PRODUÇÃO (retry false)
      retry: false,
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
})

export const router = createBrowserRouter(routesConfig)

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools position="top-right" initialIsOpen={false} />
    </QueryClientProvider>
  )
}
