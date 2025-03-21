import { StrictMode } from 'react'
import {
  renderToPipeableStream,
  type RenderToPipeableStreamOptions,
} from 'react-dom/server'
import { RouterProvider, createMemoryHistory } from '@tanstack/react-router'
import { createRouter } from './router'

export function render(url: string, options: RenderToPipeableStreamOptions) {
  // Create a new router instance for each request
  const router = createRouter()

  const memoryHistory = createMemoryHistory({
    initialEntries: [url],
  })

  router.update({
    history: memoryHistory,
  })

  router.load()
  
  // Wait for the router to be ready
  return renderToPipeableStream(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
    options
  )
}
