import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { createRouter } from './router'

// Create a new router instance for the client
const router = createRouter()

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
