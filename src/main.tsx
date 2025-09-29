import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
)

declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__?: QueryClient
  }
}
// This code is for all users
window.__TANSTACK_QUERY_CLIENT__ = queryClient

export { queryClient } // export so App can use it if needed
