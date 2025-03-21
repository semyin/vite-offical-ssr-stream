import { createRoute } from '@tanstack/react-router'
import { Suspense, lazy } from 'react'
import reactLogo from '../assets/react.svg'
import { rootRoute } from './root'

// Lazy load the Card component
const Card = lazy(() => import('../Card'))

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage,
})

function IndexPage() {
  return (
    <div className="home-page">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TanStack Router</h1>

      <Suspense fallback={<div>Loading card component...</div>}>
        <Card />
      </Suspense>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
