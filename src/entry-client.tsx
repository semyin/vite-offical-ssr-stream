import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
// import { StartClient } from '@tanstack/react-start-client'
import { createRouter } from './router'
import { RouterProvider } from '@tanstack/react-router'
// Create a new router instance for the client
const router = createRouter()

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
