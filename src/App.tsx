import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import ErrorBoundary from "./pages/Error/ErrorBoundary"
import { AppRoutes } from "./routes/routes"

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

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </BrowserRouter>
      <ReactQueryDevtools position="top-right" initialIsOpen={false} />
    </QueryClientProvider>
  )
}
