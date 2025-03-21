import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './root'

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About</h1>
      <p>This is a demo application showcasing Vite SSR with TanStack Router.</p>
      <p>TanStack Router is a fully type-safe router for React applications that provides excellent performance and developer experience.</p>
    </div>
  )
}
