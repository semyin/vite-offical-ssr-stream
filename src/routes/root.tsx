import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

// Define the root route
export const rootRoute = createRootRoute({
  component: RootComponent,
})

// Root component that will wrap all other routes
function RootComponent() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* This is where child routes will be rendered */}
        <Outlet />
      </main>
      <footer>
        <p>&#xa9; {new Date().getFullYear()} - Vite SSR with TanStack Router</p>
      </footer>
    </div>
  )
}
