import { ReactNode } from 'react'

export interface ErrorBoundaryProps {
  children: ReactNode
}

export interface ErrorBoundaryState {
  error?: Error
  hasError?: boolean
}
