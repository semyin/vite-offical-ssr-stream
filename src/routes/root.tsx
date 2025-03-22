import { createRootRoute, Outlet } from '@tanstack/react-router'
// import { Link } from '@tanstack/react-router'

// Define the root route
export const rootRoute = createRootRoute({
  component: RootComponent,
})

// Root component that will wrap all other routes
function RootComponent() {
  return (
    <Outlet />
  )
}
