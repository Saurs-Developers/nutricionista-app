import { Component, ErrorInfo, ReactNode } from "react"

import { Typography } from "@/components/Typography"

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ hasError: true })
    console.error(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="px-[1rem] py-[2rem] h-screen w-screen flex flex-col items-center justify-center">
          <img src="/logo.svg" className="mb-4" alt="" />
          <Typography
            className="text-center text-danger"
            type="body"
            variant="xl"
          >
            Um Erro foi encontrado.
          </Typography>
          <Typography className="text-center mt-3" type="body" variant="lg">
            Caso persista, entre em contato com o suporte.
          </Typography>
          <button
            className="mt-4"
            onClick={() => {
              localStorage.removeItem("access-token")
              localStorage.removeItem("refresh-token")
              window.location.replace("/login")
            }}
          >
            <Typography className="underline" type="body" variant="md">
              Ir para a página de login
            </Typography>
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
